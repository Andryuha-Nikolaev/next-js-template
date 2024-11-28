"use client";

import { forwardRef } from "react";

import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type { DatePickerProps } from "@/types/form/datePicker";

import s from "./DatePicker.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DatePicker = forwardRef<HTMLLabelElement, DatePickerProps>(
	({ errorMessage, label, isRequired }, ref) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const autoCorrectedDatePipe =
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			createAutoCorrectedDatePipe("dd.mm.yyyy HH:MM");

		return (
			<div className={s.block}>
				<InputWrapper
					errorMessage={errorMessage}
					label={label}
					isRequired={isRequired}
				>
					<Input
						ref={ref}
						placeholder="dd.мм.yyyy"
						mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						pipe={autoCorrectedDatePipe}
					/>
				</InputWrapper>
			</div>
		);
	}
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
