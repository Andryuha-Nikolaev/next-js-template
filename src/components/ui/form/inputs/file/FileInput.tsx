"use client";

import { forwardRef, useEffect, useMemo, useRef } from "react";

import AttachIcon from "@/components/icons/attach/AttachIcon";
import RootButton from "@/components/ui/buttons/root/RootButton";
import type { FileInputProps } from "@/types/form/fileInput";

import FileInputPreview from "./componens/preview/FileInputPreview";
import FileInputRules from "./componens/rules/FileInputRules";
import s from "./FileInput.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const FileInput = forwardRef<HTMLLabelElement, FileInputProps>(
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
		const inputRef = useRef<HTMLInputElement | null>(null);

		const currentFileList = useMemo(() => Array.from(fileList), [fileList]);

		const previews = useMemo(
			() =>
				currentFileList.map((file) => ({
					image: URL.createObjectURL(file),
					name: file.name,
					size: file.size,
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
						style={{
							opacity: 0,
							width: 0,
							height: 0,
							overflow: "hidden",
							display: "block",
						}}
						ref={ref}
					>
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
							inputRef.current?.click();
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
