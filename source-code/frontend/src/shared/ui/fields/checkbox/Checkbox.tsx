import { forwardRef, useId } from "react";

import clsx from "clsx";

import s from "./Checkbox.module.scss";
import type { CheckboxProps } from "./types";

import { InputWrapper } from "../input-wrapper";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{ errorMessage, label, children, isError, isRequired, ...restProps },
		ref
	) => {
		const id = useId();

		const checkboxClassNames = clsx(
			s.input,
			(errorMessage || isError) && s.error
		);

		return (
			<InputWrapper
				errorMessage={errorMessage}
				isRequired={isRequired}
				label={label}
				id={id}
			>
				<label className={clsx(s.label, restProps.disabled && s.disabled)}>
					<input
						id={id}
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
