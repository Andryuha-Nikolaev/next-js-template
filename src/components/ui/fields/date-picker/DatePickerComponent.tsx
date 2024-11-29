"use client";

import { forwardRef } from "react";

import DatePicker from "react-datepicker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type { DatePickerComponentProps } from "@/types/form/datePicker";

import s from "./DatePickerComponent.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DatePickerComponent = forwardRef<
	HTMLLabelElement,
	DatePickerComponentProps
>(({ errorMessage, label, isRequired, ...restProps }, ref) => {
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
				<DatePicker
					{...restProps}
					dateFormat="dd.MM.yyyy"
					customInput={
						<Input
							ref={ref}
							style={{ backgroundColor: "red" }}
							placeholder="dd.мм.yyyy"
							mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							pipe={autoCorrectedDatePipe}
						/>
					}
				/>
			</InputWrapper>
		</div>
	);
});

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
