import { forwardRef, useRef } from "react";

import AttachIcon from "@/components/icons/attach/AttachIcon";
import CloseButton from "@/components/ui/buttons/close/CloseButton";
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
			fileNames,
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
				{!!fileNames?.length && (
					<div className={s.fileNames}>
						<div>
							{fileNames.map((name, i) => (
								<p key={i} className={s.fileName}>
									{`${name} `}
								</p>
							))}
						</div>
						{!!onReset && <CloseButton className={s.reset} onClick={onReset} />}
					</div>
				)}
			</InputWrapper>
		);
	}
);

FileInput.displayName = "FileInput";

export default FileInput;
