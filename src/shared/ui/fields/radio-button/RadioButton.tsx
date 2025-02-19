import { forwardRef } from "react";

import clsx from "clsx";
import parse from "html-react-parser";

import type { RadioButtonProps } from "@/shared/ui/fields/radio-button/types";

import s from "./RadioButton.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	(
		{
			errorMessage,
			label,
			items,
			isRequired,
			value,
			variant = "vertical",
			disabled,
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
				<div className={clsx(s.block, s[variant])}>
					{items.map((item, i) => (
						<label key={i} className={clsx(s.label, disabled && s.disabled)}>
							<input
								checked={value === item.value}
								ref={ref}
								type="radio"
								className={radioClassNames}
								{...restProps}
								value={item.value}
								disabled={disabled || item.disabled}
							/>
							{typeof item.label === "string" ? (
								<p className={s.text}>{parse(item.label)}</p>
							) : (
								item.label
							)}
						</label>
					))}
				</div>
			</InputWrapper>
		);
	}
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
