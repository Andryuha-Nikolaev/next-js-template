"use client";

import { forwardRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import DatePicker from "react-datepicker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type {
	DatePickerComponentProps,
	RangeValue,
	SingleValue,
} from "@/types/form/datePicker";

import s from "./DatePickerComponent.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DATE_FORMAT = "dd.MM.yyyy";
const DATE_TIME_FORMAT = "dd.MM.yyyy HH:MM";
const AUTOCORRECT_FORMAT = "dd.mm.yyyy HH:MM";

const DatePickerComponent = forwardRef<
	HTMLLabelElement,
	DatePickerComponentProps
>(({ errorMessage, label, isRequired, value, onChange, time, mode }, ref) => {
	const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;

	const [inputValue, setInputValue] = useState(
		mode === "single" && value ? format(value, dateFormat) : ""
	);

	const [startInputValue, setStartInputValue] = useState(
		mode === "range" && value[0] ? format(value[0], dateFormat) : ""
	);
	const [endInputValue, setEndInputValue] = useState(
		mode === "range" && value[1] ? format(value[1], dateFormat) : ""
	);

	const handleSingleSelect = (date: SingleValue) => {
		if (mode === "single") {
			onChange(date);

			if (!date) {
				setInputValue("");
			} else {
				setInputValue(format(date, dateFormat));
			}
		}
	};

	const handleInputChange = (inputValue: string) => {
		if (mode === "single") {
			setInputValue(inputValue);

			if (inputValue.length === 10) {
				const parsedDate = parse(inputValue, dateFormat, new Date());

				if (isValid(parsedDate)) {
					onChange(parsedDate);
				}
			} else if (!inputValue.length) {
				onChange(null);
			}
		}
	};

	const handleRangeSelect = (date: RangeValue) => {
		if (mode === "range") {
			onChange(date);
			setStartInputValue(date[0] ? format(date[0], dateFormat) : "");
			setEndInputValue(date[1] ? format(date[1], dateFormat) : "");
		}
	};

	const handleStartInputChange = (inputValue: string) => {
		if (mode === "range") {
			setStartInputValue(inputValue);

			if (inputValue.length === 10) {
				const parsedDate = parse(inputValue, dateFormat, new Date());

				if (isValid(parsedDate)) {
					onChange([parsedDate, value[1]]);
				}
			} else if (!inputValue.length) {
				onChange([null, value[1]]);
			}
		}
	};

	const handleEndInputChange = (inputValue: string) => {
		if (mode === "range") {
			setEndInputValue(inputValue);

			if (inputValue.length === 10) {
				const parsedDate = parse(inputValue, dateFormat, new Date());

				if (isValid(parsedDate)) {
					onChange([value[0], parsedDate]);
				}
			} else if (!inputValue.length) {
				onChange([value[0], null]);
			}
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const autoCorrectedDatePipe =
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		createAutoCorrectedDatePipe(AUTOCORRECT_FORMAT);

	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				{mode === "single" && (
					<Input
						ref={ref}
						value={inputValue}
						placeholder={dateFormat}
						mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						pipe={autoCorrectedDatePipe}
						onChange={(e) => handleInputChange(e.target.value)}
						// onOpenCalendar={() => setIsOpen(true)}
					/>
				)}

				{mode === "single" && (
					<DatePicker
						selected={value}
						onChange={(e) => handleSingleSelect(e)}
						// startDate={startDate}
						// endDate={endDate}
						// selectsRange
						inline
					/>
				)}

				{mode === "range" && (
					<>
						<Input
							ref={ref}
							value={startInputValue}
							placeholder={dateFormat}
							mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							pipe={autoCorrectedDatePipe}
							onChange={(e) => handleStartInputChange(e.target.value)}
							// onOpenCalendar={() => setIsOpen(true)}
						/>
						<Input
							value={endInputValue}
							placeholder={dateFormat}
							mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							pipe={autoCorrectedDatePipe}
							onChange={(e) => handleEndInputChange(e.target.value)}
							// onOpenCalendar={() => setIsOpen(true)}
						/>
					</>
				)}
				{mode === "range" && (
					<DatePicker
						// TODO менять при изменении даты конца через инпут
						selected={value[0]}
						onChange={(e) => handleRangeSelect(e)}
						startDate={value[0] ?? undefined}
						endDate={value[1] ?? undefined}
						selectsRange
						inline
					/>
				)}
			</InputWrapper>
		</div>
	);
});

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
