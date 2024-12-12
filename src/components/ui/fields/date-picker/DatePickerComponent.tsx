"use client";

import { forwardRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import Calendar from "react-calendar";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type { DatePickerComponentProps, Value } from "@/types/form/datePicker";

import s from "./DatePickerComponent.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DATE_FORMAT = "dd.MM.yyyy";
const DATE_TIME_FORMAT = "dd.MM.yyyy HH:MM";

const DatePickerComponent = forwardRef<
	HTMLLabelElement,
	DatePickerComponentProps
>(
	(
		{ errorMessage, label, isRequired, value, onChange, time, ...restProps },
		ref
	) => {
		const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;

		const [inputValue, setInputValue] = useState(
			value instanceof Date ? format(value, dateFormat) : ""
		);

		const [month, setMonth] = useState(
			value instanceof Date ? new Date(value) : new Date()
		);

		const handleDayPickerSelect = (date: Value) => {
			onChange(date);

			if (!date) {
				setInputValue("");
			} else {
				const currentMonth =
					date instanceof Date
						? date
						: Array.isArray(date) && date[0]
							? date[0]
							: new Date();
				setMonth(currentMonth);
				setInputValue(format(currentMonth, dateFormat));
			}
		};

		const handleInputChange = (value: string) => {
			setInputValue(value);

			if (value.length === 10) {
				const parsedDate = parse(value, dateFormat, new Date());

				if (isValid(parsedDate)) {
					onChange(parsedDate);
					setMonth(parsedDate);
				} else {
					onChange(null);
				}
			} else if (!value.length) {
				onChange(null);
			}
		};

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const autoCorrectedDatePipe =
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			createAutoCorrectedDatePipe(dateFormat);
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
						mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						pipe={autoCorrectedDatePipe}
						onChange={(e) => handleInputChange(e.target.value)}
						// onLabelFocus={() => setIsOpen(true)}
						// onOpenCalendar={() => setIsOpen(true)}
						// onLabelBlur={() => setIsOpen(false)}
					/>
					<Calendar
						value={value}
						onChange={handleDayPickerSelect}
						onActiveStartDateChange={(e) => {
							console.log(e.value instanceof Date);

							setMonth(e.activeStartDate ?? new Date());
						}}
						activeStartDate={month}
						{...restProps}
					/>
				</InputWrapper>
			</div>
		);
	}
);

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
