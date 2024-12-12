"use client";

import { forwardRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import Calendar from "react-calendar";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type { DatePickerComponentProps } from "@/types/form/datePicker";

import s from "./DatePickerComponent.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DatePickerComponent = forwardRef<
	HTMLLabelElement,
	DatePickerComponentProps
>(({ errorMessage, label, isRequired, ...restProps }, ref) => {
	const [inputValue, setInputValue] = useState(
		restProps.value instanceof Date ? format(restProps.value, "dd.MM.yyyy") : ""
	);

	const [month, setMonth] = useState(
		restProps.value instanceof Date ? new Date(restProps.value) : new Date()
	);

	const handleDayPickerSelect = (date: Date | undefined) => {
		if (restProps.onChange) {
			if (!date) {
				setInputValue("");
				restProps.onChange("");
			} else {
				restProps.onChange(date);
				setMonth(date);
				setInputValue(format(date, "dd.MM.yyyy"));
			}
		}
	};

	const handleInputChange = (value: string) => {
		setInputValue(value);

		if (value.length === 10) {
			const parsedDate = parse(value, "dd.MM.yyyy", new Date());

			if (isValid(parsedDate) && restProps.onChange) {
				restProps.onChange(parsedDate);
				setMonth(parsedDate);
			} else {
				restProps.onChange("");
			}
		} else if (!value.length) {
			restProps.onChange("");
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const autoCorrectedDatePipe =
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		createAutoCorrectedDatePipe("dd.mm.yyyy HH:MM");
	console.log(month);

	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<Input
					ref={ref}
					value={inputValue}
					placeholder="dd.мм.yyyy"
					mask={[
						/\d/,
						/\d/,
						".",
						/\d/,
						/\d/,
						".",
						/\d/,
						/\d/,
						/\d/,
						/\d/,
						" ",
						/\d/,
						/\d/,
					]}
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					pipe={autoCorrectedDatePipe}
					onChange={(e) => handleInputChange(e.target.value)}
					// onLabelFocus={() => setIsOpen(true)}
					// onOpenCalendar={() => setIsOpen(true)}
					// onLabelBlur={() => setIsOpen(false)}
				/>
				<Calendar
					selectRange={false}
					{...restProps}
					onChange={handleDayPickerSelect}
					onActiveStartDateChange={(e) => {
						console.log(e.value instanceof Date);

						setMonth(e.activeStartDate);
					}}
					activeStartDate={month}
				/>
			</InputWrapper>
		</div>
	);
});

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
