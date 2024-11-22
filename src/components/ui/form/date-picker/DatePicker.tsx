"use client";

import { useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

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

		setInputValue(value);

		const parsedDate = parse(e.target.value, "dd.MM.yyyy", new Date());

		if (isValid(parsedDate)) {
			onChange(parsedDate);
			setMonth(parsedDate);
		} else {
			onChange(undefined);
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const autoCorrectedDatePipe = createAutoCorrectedDatePipe("dd.mm.yyyy HH:MM");

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
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					pipe={autoCorrectedDatePipe}
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
