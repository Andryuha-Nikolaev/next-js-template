"use client";

import { useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";

import type { DatePickerProps } from "@/types/form/datePicker";

import s from "./DatePicker.module.scss";

import InputWrapper from "../inputs/components/wrapper/InputWrapper";
import Input from "../inputs/root/Input";

const DatePicker = ({
	errorMessage,
	label,
	isRequired,
	mode,
	value,
	onChange,
}: DatePickerProps) => {
	const [month, setMonth] = useState(new Date());

	// Hold the selected date in state
	// const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

	// Hold the input value in state
	const [inputValue, setInputValue] = useState("");

	const handleDayPickerSelect = (date: Date | undefined) => {
		if (!date) {
			setInputValue("");
			onChange(undefined);
		} else {
			onChange(date);
			setMonth(date);
			setInputValue(format(date, "dd.MM.yyyy"));
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		// Валидация дня и месяца
		const [day, month] = value.split(".");
		console.log(day && (parseInt(day, 10) < 1 || parseInt(day, 10) > 31));

		if (
			(day && (parseInt(day, 10) < 1 || parseInt(day, 10) > 31)) ||
			(month && (parseInt(month, 10) < 1 || parseInt(month, 10) > 12))
		) {
			return;
		}

		console.log("aaaaaaaaa");

		setInputValue(value); // keep the input value in sync

		const parsedDate = parse(e.target.value, "dd.MM.yyyy", new Date());

		if (isValid(parsedDate)) {
			onChange(parsedDate);
			setMonth(parsedDate);
		} else {
			onChange(undefined);
		}
	};
	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<Input
					value={inputValue}
					placeholder="dd.MM.yyyy"
					mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
					onChange={handleInputChange}
				/>
				<div className={s.picker}>
					{mode === "single" && (
						<DayPicker
							mode={mode}
							month={month}
							onMonthChange={setMonth}
							selected={value}
							onSelect={handleDayPickerSelect}
						/>
					)}
				</div>
			</InputWrapper>
		</div>
	);
};

export default DatePicker;
