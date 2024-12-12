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
		{
			errorMessage,
			label,
			isRequired,
			value,
			onChange,
			time,
			range,
			...restProps
		},
		ref
	) => {
		const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;

		const [inputValue, setInputValue] = useState(
			value && value[0] ? format(value[0], dateFormat) : ""
		);

		const [inputEndValue, setInputEndValue] = useState(
			value && value[1] ? format(value[1], dateFormat) : ""
		);

		const [month, setMonth] = useState(
			value instanceof Date ? new Date(value) : new Date()
		);

		console.log(value);

		const handleDayPickerSelect = (date: Value) => {
			const currentDate = Array.isArray(date) ? date : [date, null];

			onChange(date);

			if (!date) {
				setInputValue("");
				setInputEndValue("");
			} else {
				// const currentMonth =
				// 	date instanceof Date
				// 		? date
				// 		: Array.isArray(date) && date[0]
				// 			? date[0]
				// 			: new Date();
				// setMonth(currentMonth);
				setInputValue(format(currentDate[0] ? currentDate[0] : "", dateFormat));
				setInputEndValue(
					format(currentDate[1] ? currentDate[1] : "", dateFormat)
				);
			}
		};

		const handleInputChange = (inputValue: string) => {
			setInputValue(inputValue);

			if (inputValue.length === 10) {
				const parsedDate = parse(inputValue, dateFormat, new Date());

				if (isValid(parsedDate)) {
					onChange([parsedDate, value ? value[1] : null]);
					setMonth(parsedDate);
				} else {
					onChange(null);
				}
			} else if (!inputValue.length) {
				onChange([null, value ? value[1] : null]);
			}
		};

		const handleInputEndChange = (inputValue: string) => {
			setInputEndValue(inputValue);

			if (inputValue.length === 10) {
				const parsedDate = parse(inputValue, dateFormat, new Date());

				if (isValid(parsedDate)) {
					onChange([value ? value[0] : null, parsedDate]);
					setMonth(parsedDate);
				} else {
					onChange(null);
				}
			} else if (!inputValue.length) {
				onChange([value ? value[0] : null, null]);
			}
		};

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const autoCorrectedDatePipe =
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			createAutoCorrectedDatePipe(dateFormat);

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
						placeholder={dateFormat}
						mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						pipe={autoCorrectedDatePipe}
						onChange={(e) => handleInputChange(e.target.value)}
						// onLabelFocus={() => setIsOpen(true)}
						// onOpenCalendar={() => setIsOpen(true)}
						// onLabelBlur={() => setIsOpen(false)}
					/>

					{range && (
						<Input
							value={inputEndValue}
							placeholder={dateFormat}
							mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							pipe={autoCorrectedDatePipe}
							onChange={(e) => handleInputEndChange(e.target.value)}
							// onLabelFocus={() => setIsOpen(true)}
							// onOpenCalendar={() => setIsOpen(true)}
							// onLabelBlur={() => setIsOpen(false)}
						/>
					)}
					<Calendar
						selectRange={range}
						value={range ? value : value && value[0]}
						onClickDay={(e) => console.log(e)}
						onChange={(e) => {
							handleDayPickerSelect(Array.isArray(e) ? e : [e, null]);
						}}
						onActiveStartDateChange={(e) => {
							// console.log(e.value instanceof Date);

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
