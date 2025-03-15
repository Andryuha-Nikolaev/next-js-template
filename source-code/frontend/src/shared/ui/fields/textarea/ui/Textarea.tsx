"use client";

import { forwardRef, useId } from "react";

import clsx from "clsx";

import type { TextareaProps } from "@/shared/ui/fields/textarea/model/types";

import s from "./Textarea.module.scss";

import { InputControls } from "../../input-controls";
import { InputWrapper } from "../../input-wrapper";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ errorMessage, label, isRequired, ...restProps }, ref) => {
		const isFilled = !!restProps.value;

		const wrapClassNames = clsx(
			s.wrap,
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

		const id = useId();

		return (
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
				id={id}
			>
				<div className={wrapClassNames}>
					<textarea id={id} ref={ref} className={s.input} {...restProps} />
					{!restProps.disabled && (
						<InputControls isFilled={isFilled} onReset={onReset} />
					)}
				</div>
			</InputWrapper>
		);
	}
);

Textarea.displayName = "Textarea";
