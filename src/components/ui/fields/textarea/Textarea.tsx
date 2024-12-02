"use client";

import { forwardRef, useState } from "react";

import clsx from "clsx";

import type { TextareaProps } from "@/types/form/textarea";

import s from "./Textarea.module.scss";

import InputControls from "../components/controls/InputControls";
import InputWrapper from "../components/wrapper/InputWrapper";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ errorMessage, label, isRequired, ...restProps }, ref) => {
		const isFilled = !!restProps.value;

		const [isFocused, setIsFocused] = useState(false);

		const wrapClassNames = clsx(
			s.wrap,
			isFocused && s.focused,
			errorMessage && s.error,
			restProps.disabled && s.disabled
		);

		const onReset = () => {
			if (restProps.onChange) {
				const event = {
					target: { value: "" },
				} as React.ChangeEvent<HTMLTextAreaElement>;

				restProps.onChange(event);
			}
		};

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<label
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					className={s.label}
				>
					<span className={wrapClassNames}>
						<textarea ref={ref} className={s.input} {...restProps} />
						{!restProps.disabled && (
							<InputControls isFilled={isFilled} onReset={onReset} />
						)}
					</span>
				</label>
			</InputWrapper>
		);
	}
);

Textarea.displayName = "Textarea";

export default Textarea;
