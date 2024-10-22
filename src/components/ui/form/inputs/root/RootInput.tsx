import type { InputHTMLAttributes } from "react";

import clsx from "clsx";
import {
	Controller,
	useFormContext,
	type FieldValues,
	type RegisterOptions,
} from "react-hook-form";
import MaskedInput, { type MaskedInputProps } from "react-text-mask";

import s from "./RootInput.module.scss";

import FieldWrapper from "../../field-wrapper/FieldWrapper";

export interface RootInputProps extends InputHTMLAttributes<HTMLInputElement> {
	options?: RegisterOptions<FieldValues>;
	name: string;
	label?: string;
	mask?: MaskedInputProps["mask"];
}

const RootInput = ({
	options,
	placeholder,
	defaultValue = "",
	label,
	name,
	mask,
	...props
}: RootInputProps) => {
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
					{mask ? (
						<MaskedInput
							mask={mask}
							guide={false}
							className={clsx(
								s.input,
								!!field.value && s.filled,
								error && s.error
							)}
							// autoComplete="new-password"
							{...props}
							{...field}
						/>
					) : (
						<input
							className={clsx(
								s.input,
								!!field.value && s.filled,
								error && s.error
							)}
							{...props}
							{...field}
						/>
					)}
				</FieldWrapper>
			)}
		/>
	);
};

export default RootInput;
