"use client";

import { forwardRef, useEffect, useId, useMemo, useRef } from "react";

import RootButton from "@/shared/ui/buttons/root/RootButton";
import type { FileInputProps } from "@/shared/ui/fields/file/model/types";

import s from "./FileInput.module.scss";
import AttachIcon from "./icons/attach-icon/AttachIcon";
import FileInputPreview from "./preview/FileInputPreview";
import FileInputRules from "./rules/FileInputRules";

import { InputWrapper } from "../../input-wrapper";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
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

		const id = useId();

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
				id={id}
			>
				<div className={s.wrap}>
					<div className={s.inputWrap}>
						<input
							id={id}
							tabIndex={-1}
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
					</div>
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
