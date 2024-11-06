import { forwardRef, useEffect, useMemo, useRef } from "react";

import AttachIcon from "@/components/icons/attach/AttachIcon";
import RootButton from "@/components/ui/buttons/root/RootButton";
import type { FileInputProps } from "@/types/form/fileInput";

import FileInputPreview from "./componens/preview/FileInputPreview";
import FileInputRules from "./componens/rules/FileInputRules";
import s from "./FileInput.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	(
		{
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
		},
		ref
	) => {
		const labelRef = useRef<HTMLLabelElement | null>(null);
		const inputRef = useRef<HTMLInputElement | null>(null);

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
					<label
						style={{ opacity: 0, width: 0, height: 0, overflow: "hidden" }}
						ref={labelRef}
					>
						<input
							ref={(node) => {
								inputRef.current = node;
								if (typeof ref === "function") {
									ref(node);
								} else if (ref) {
									ref.current = node;
								}
							}}
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
	}
);

FileInput.displayName = "FileInput";

export default FileInput;
