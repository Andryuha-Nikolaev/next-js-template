import { useEffect, useRef, useState } from "react";

import Image from "next/image";

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
	onChangeFileList,
	...restProps
}: FileInputProps) => {
	const labelRef = useRef<HTMLLabelElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [currentFileList, setCurrentFileList] = useState(Array.from(fileList));

	useEffect(() => {
		setCurrentFileList(Array.from(fileList));
	}, [fileList]);

	useEffect(() => {
		if (inputRef.current) {
			const dataTransfer = new DataTransfer();
			Array.from(fileList).forEach((file) => dataTransfer.items.add(file));
			inputRef.current.files = dataTransfer.files;
		}
	}, [fileList]);

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
			{!!currentFileList.length && (
				<div className={s.previewBlock}>
					{currentFileList.map((file, i) => (
						<div className={s.previewItem} key={i}>
							<Image
								className={s.previewImage}
								src={URL.createObjectURL(file)}
								alt=""
								width={200}
								height={200}
							/>
							<div className={s.previewName}>
								<p className={s.fileName}>{file.name}</p>
								<CloseButton
									className={s.reset}
									onClick={() => onDeleteFile(file.name)}
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
