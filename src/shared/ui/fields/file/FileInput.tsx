"use client";

import { forwardRef, useEffect, useMemo, useRef } from "react";

import AttachIcon from "@/shared/ui/fields/file/icons/attach-icon/AttachIcon";
import type { FileInputProps } from "@/shared/ui/fields/file/types";

import FileInputPreview from "./componens/preview/FileInputPreview";
import FileInputRules from "./componens/rules/FileInputRules";
import s from "./FileInput.module.scss";

import RootButton from "../../buttons/root/RootButton";
import InputWrapper from "../components/wrapper/InputWrapper";

const FileInput = forwardRef<HTMLLabelElement, FileInputProps>(
	(
		{
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

		const onDeleteFile = (fileName: string) => {
			const fileArray = Array.from(fileList);
			const filteredArray = fileArray.filter((file) => file.name !== fileName);
			const dataTransfer = new DataTransfer();
			filteredArray.forEach((file) => dataTransfer.items.add(file));

			if (filteredArray.length < 1) {
				onChangeFileList("");
			} else {
				onChangeFileList(dataTransfer.files);
			}
		};

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<div className={s.wrap}>
					<label className={s.label} ref={ref}>
						<input
							tabIndex={-1}
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
						disabled={restProps.disabled}
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
