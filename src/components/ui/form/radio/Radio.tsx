import { forwardRef } from "react";

import clsx from "clsx";

import type { InputProps } from "@/types/input";

import s from "./Radio.module.scss";

import InputWrapper from "../inputs/components/wrapper/InputWrapper";

const Radio = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			errorMessage,
			label,

			children,
			isRequired,
			...restProps
		},
		ref
	) => {
		const radioClassNames = clsx(s.input, errorMessage && s.error);

		return (
			<InputWrapper
				errorMessage={errorMessage}
				isRequired={isRequired}
				label={label}
			>
				<label className={s.label}>
					<input
						ref={ref}
						type="radio"
						className={radioClassNames}
						{...restProps}
					/>
					{children}
				</label>
			</InputWrapper>
		);
	}
);

Radio.displayName = "Radio";

export default Radio;
