import { forwardRef, useRef } from "react";

import AttachIcon from "@/components/icons/attach/AttachIcon";
import RootButton from "@/components/ui/buttons/root/RootButton";
import type { FileInputProps } from "@/types/input";

import s from "./FileInput.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	(
		{
			onReset,
			errorMessage,
			label,
			buttonText = "Прикрепить файл",
			fileSize,
			fileFormat,

			...restProps
		},
		ref
	) => {
		const inputRef = useRef<HTMLLabelElement>(null);

		return (
			<InputWrapper errorMessage={errorMessage} label={label}>
				<div className={s.wrap}>
					<label style={{ display: "none", opacity: 0 }} ref={inputRef}>
						<input ref={ref} type="file" {...restProps}></input>
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
					{(fileSize || fileFormat) && (
						<p
							className={s.rules}
						>{`${fileSize ? `${fileSize} ` : ""}${fileFormat ? fileFormat : ""}`}</p>
					)}
				</div>
				{/* {!!fieldState?.length && (
				<p className={s.fileName}>
					{Array.from(fieldState).map((file) => `${file.name} `)}
				</p>
			)} */}
			</InputWrapper>
		);
	}
);

FileInput.displayName = "FileInput";

export default FileInput;
