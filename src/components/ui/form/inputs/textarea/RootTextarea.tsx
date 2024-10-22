import type { TextareaHTMLAttributes } from "react";

import clsx from "clsx";
import {
	Controller,
	useFormContext,
	type FieldValues,
	type RegisterOptions,
} from "react-hook-form";

import s from "./RootTextarea.module.scss";

import FieldWrapper from "../../field-wrapper/FieldWrapper";

interface RootTextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	options?: RegisterOptions<FieldValues>;
	name: string;
	label?: string;
}

const RootTextarea = ({
	options,
	placeholder,
	defaultValue = "",
	label,
	name,
	...props
}: RootTextareaProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			rules={options}
			render={({ field, fieldState: { error } }) => (
				<FieldWrapper
					isRequired={!!options?.required}
					name={name}
					placeholder={placeholder}
					label={label}
					withClear
				>
					<span
						className={clsx(
							s.wrapper,
							!!field.value && s.filled,
							error && s.error
						)}
					>
						<textarea className={s.textarea} {...props} {...field}></textarea>
					</span>
				</FieldWrapper>
			)}
		/>
	);
};

export default RootTextarea;
