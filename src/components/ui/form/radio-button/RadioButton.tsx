import { forwardRef } from "react";

import clsx from "clsx";
import parse from "html-react-parser";

import type { RadioButtonProps } from "@/types/form/radioButton";

import s from "./RadioButton.module.scss";

import InputWrapper from "../inputs/components/wrapper/InputWrapper";

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ errorMessage, label, items, isRequired, value, ...restProps }, ref) => {
		const radioClassNames = clsx(s.input);

		return (
			<InputWrapper
				errorMessage={errorMessage}
				isRequired={isRequired}
				label={label}
			>
				<div className={s.block}>
					{items.map((item, i) => (
						<label key={i} className={s.label}>
							<input
								checked={value === item.value}
								ref={ref}
								type="radio"
								className={radioClassNames}
								{...restProps}
								value={item.value}
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
