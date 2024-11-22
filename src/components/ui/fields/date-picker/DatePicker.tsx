"use client";

import { forwardRef, useEffect, useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type { DatePickerProps } from "@/types/form/datePicker";

import s from "./DatePicker.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DatePicker = forwardRef<HTMLLabelElement, DatePickerProps>(
	({ errorMessage, label, isRequired, mode, value, onChange }, ref) => {
		const [month, setMonth] = useState(value ? new Date(value) : new Date());

		const [inputValue, setInputValue] = useState(
			value ? format(value, "dd.MM.yyyy") : ""
		);

		useEffect(() => {
			const formattedValue = format(value, "dd.MM.yyyy");
			if (formattedValue !== inputValue) {
				setInputValue(value ? formattedValue : "");
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [value]);

		const handleDayPickerSelect = (date: Date | undefined) => {
			if (!date) {
				setInputValue("");
				onChange("");
			} else {
				onChange(date);
				setMonth(date);
				setInputValue(format(date, "dd.MM.yyyy"));
			}
		};

		const handleInputChange = (value: string) => {
			setInputValue(value);

			if (value.length === 10) {
				const parsedDate = parse(value, "dd.MM.yyyy", new Date());

				if (isValid(parsedDate)) {
					onChange(parsedDate);
					setMonth(parsedDate);
				} else {
					onChange("");
				}
			} else if (!value.length) {
				onChange("");
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
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label ref={ref} className={s.label}>
						<Input
							value={inputValue}
							placeholder="dd.мм.yyyy"
							mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							pipe={autoCorrectedDatePipe}
							onChange={handleInputChange}
						/>
					</label>
					<div className={s.picker}>
						{mode === "single" && (
							<DayPicker
								mode={mode}
								month={month}
								onMonthChange={setMonth}
								selected={value ? new Date(value) : undefined}
								onSelect={handleDayPickerSelect}
							/>
						)}
					</div>
				</InputWrapper>
			</div>
		);
	}
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
