import { useRef, type InputHTMLAttributes } from "react";

import {
	useFormContext,
	type FieldValues,
	type RegisterOptions,
} from "react-hook-form";

import RootButton from "@/components/ui/buttons/root/RootButton";
import AttachIcon from "@/icons/attach/AttachIcon";

import s from "./FileInput.module.scss";

import FieldWrapper from "../../field-wrapper/FieldWrapper";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	options?: RegisterOptions<FieldValues>;
	fileSize: string;
	fileFormat?: string;
	buttonText?: string;
	label?: string;
}

const FileInput = ({
	name,
	options,
	fileSize,
	fileFormat,
	buttonText = "Прикрепить файл",
	label,
	...props
}: FileInputProps) => {
	const { register, watch } = useFormContext();

	const inputRef = useRef<HTMLLabelElement>(null);

	const fieldState: FileList = watch(name);

	return (
		<FieldWrapper
			withClear={false}
			isRequired={!!options?.required}
			name={name}
			label={label}
		>
			<div className={s.wrap}>
				<label style={{ display: "none", opacity: 0 }} ref={inputRef}>
					<input type="file" {...register(name, options)} {...props}></input>
				</label>
				<RootButton
					className={s.button}
					Icon={<AttachIcon />}
					colorVariant="var3"
					size="middle"
					onClick={() => {
						inputRef.current?.click();
					}}
				>
					{buttonText}
				</RootButton>
				<p
					className={s.rules}
				>{`${fileSize}${fileFormat ? fileFormat : ""}`}</p>
			</div>
			{!!fieldState?.length && (
				<p className={s.fileName}>
					{Array.from(fieldState).map((file) => `${file.name} `)}
				</p>
			)}
		</FieldWrapper>
	);
};

export default FileInput;
