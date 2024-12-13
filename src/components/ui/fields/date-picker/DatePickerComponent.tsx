"use client";

import { forwardRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type { DatePickerComponentProps } from "@/types/form/datePicker";

import s from "./DatePickerComponent.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DATE_FORMAT = "dd.MM.yyyy";
const DATE_TIME_FORMAT = "dd.MM.yyyy HH:MM";

const DatePickerComponent = forwardRef<
	HTMLLabelElement,
	DatePickerComponentProps
>(({ errorMessage, label, isRequired, variant, time, ...restProps }, ref) => {
	const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;

	const currentInputValue =
		variant.mode === "single" && variant.value
			? format(variant.value, dateFormat)
			: "";
	const currentMonthValue =
		variant.mode === "single" && variant.value ? variant.value : new Date();

	const [inputValue, setInputValue] = useState(currentInputValue);
	const [month, setMonth] = useState(currentMonthValue);

	const handleSingleSelect = (date: Date | null) => {
		if (variant.mode === "single") {
			variant.onChange(date);
		}

		if (!date) {
			setInputValue("");
		} else {
			setInputValue(format(date, dateFormat));
		}
	};

	const handleInputChange = (inputValue: string) => {
		setInputValue(inputValue);

		if (variant.mode === "single") {
			if (inputValue.length === 10) {
				const parsedDate = parse(inputValue, dateFormat, new Date());

				if (isValid(parsedDate)) {
					variant.onChange(parsedDate);
					setMonth(parsedDate);
				}
			} else if (!inputValue.length) {
				variant.onChange(null);
			}
		}
	};

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
				<DayPicker
					mode={variant.mode}
					month={month}
					selected={variant.value ?? undefined}
					onSelect={(e) => {
						if (variant.mode === "single") {
							handleSingleSelect(e instanceof Date ? e : null);
						}
					}}
					onMonthChange={setMonth}
					{...restProps}
				/>
			</InputWrapper>
		</div>
	);
});

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
