import { useEffect, useMemo, useRef } from "react";

import AttachIcon from "@/components/icons/attach/AttachIcon";
import CloseButton from "@/components/ui/buttons/close/CloseButton";
import RootButton from "@/components/ui/buttons/root/RootButton";
import type { FileInputProps } from "@/types/input";

import s from "./FileInput.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const FileInput = ({
	onDeleteFile,
	errorMessage,
	label,
	buttonText = "Прикрепить файл",
	fileSize,
	fileFormat,
	fileList,
	withPreview,
	onChangeFileList,
	...restProps
}: FileInputProps) => {
	const labelRef = useRef<HTMLLabelElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const currentFileList = useMemo(() => Array.from(fileList), [fileList]);

	const previews = useMemo(
		() =>
			currentFileList.map((file) => ({
				image: URL.createObjectURL(file),
				name: file.name,
			})),
		[currentFileList]
	);

	useEffect(() => {
		if (inputRef.current) {
			const dataTransfer = new DataTransfer();
			currentFileList.forEach((file) => dataTransfer.items.add(file));
			inputRef.current.files = dataTransfer.files;
		}
	}, [currentFileList]);

	return (
		<InputWrapper errorMessage={errorMessage} label={label}>
			<div className={s.wrap}>
				<label style={{ display: "none", opacity: 0 }} ref={labelRef}>
					<input
						ref={inputRef}
						type="file"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							if (e.target.value) {
								onChangeFileList(e.target.files);
							}
						}}
						{...restProps}
					></input>
				</label>
				<RootButton
					type="button"
					className={s.button}
					Icon={<AttachIcon />}
					colorVariant="var2"
					onClick={() => {
						labelRef.current?.click();
					}}
				>
					{buttonText}
				</RootButton>
				{(fileSize || fileFormat) && (
					<p
						className={s.rules}
					>{`${fileSize ? `${fileSize} ` : ""}${fileFormat ? fileFormat : ""}`}</p>
				)}
			</div>
			{!!previews.length && (
				<div className={s.previewBlock}>
					{previews.map((item, i) => (
						<div className={s.previewItem} key={i}>
							{withPreview && (
								// eslint-disable-next-line @next/next/no-img-element
								<img className={s.previewImage} src={item.image} alt="" />
							)}

							<div className={s.previewName}>
								<p className={s.fileName}>{item.name}</p>
								<CloseButton
									className={s.reset}
									onClick={() => onDeleteFile(item.name)}
								/>
							</div>
						</div>
					))}
				</div>
			)}
		</InputWrapper>
	);
};
export default FileInput;
