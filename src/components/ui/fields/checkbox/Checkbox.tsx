import { forwardRef } from "react";

import clsx from "clsx";

import type { CheckboxProps } from "@/types/form/checkbox";

import s from "./Checkbox.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{ errorMessage, label, children, isError, isRequired, ...restProps },
		ref
	) => {
		const checkboxClassNames = clsx(
			s.input,
			(errorMessage || isError) && s.error
		);

		return (
			<InputWrapper
				errorMessage={errorMessage}
				isRequired={isRequired}
				label={label}
			>
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
