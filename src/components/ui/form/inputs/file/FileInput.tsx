import { useEffect, useMemo, useRef } from "react";

import AttachIcon from "@/components/icons/attach/AttachIcon";
import RootButton from "@/components/ui/buttons/root/RootButton";
import type { FileInputProps } from "@/types/form/fileInput";

import FileInputPreview from "./componens/preview/FileInputPreview";
import FileInputRules from "./componens/rules/FileInputRules";
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
	isRequired,
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
		<InputWrapper
			errorMessage={errorMessage}
			label={label}
			isRequired={isRequired}
		>
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
				<FileInputRules fileSize={fileSize} fileFormat={fileFormat} />
			</div>
			<FileInputPreview
				previews={previews}
				onDeleteFile={(name) => onDeleteFile(name)}
				withPreview={withPreview}
			/>
		</InputWrapper>
	);
};
export default FileInput;
