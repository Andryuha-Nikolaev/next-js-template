import { forwardRef } from "react";

import clsx from "clsx";

import type { InputProps } from "@/types/input";

import s from "./Checkbox.module.scss";

import InputWrapper from "../inputs/components/wrapper/InputWrapper";

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			mask,
			onReset,
			errorMessage,
			label,
			type,
			value,
			children,
			isRequired,
			...restProps
		},
		ref
	) => {
		const checkboxClassNames = clsx(s.input, errorMessage && s.error);

		return (
			<InputWrapper errorMessage={errorMessage} isRequired={isRequired}>
				<label className={s.label}>
					<input
						ref={ref}
						type="checkbox"
						className={checkboxClassNames}
						{...restProps}
					/>
					{children}
				</label>
			</InputWrapper>
		);
	}
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
