"use client";

import { forwardRef, useEffect, useState } from "react";

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
const DATE_MASK = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];

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
			mode,
			modules = { input: { enabled: true } },
		},
		ref
	) => {
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

		const [month, setMonth] = useState(
			mode === "range" && value[0] ? value[0] : null
		);

		useEffect(() => {
			if (mode === "range") {
				if (!value[0]) {
					setStartInputValue("");
				}
				if (!value[1]) {
					setEndInputValue("");
				}
			}
			if (mode === "single") {
				if (!value) {
					setInputValue("");
				}
			}
		}, [mode, value]);

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
				setMonth(date[0]);
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
						if (value[1] && parsedDate.getTime() > value[1].getTime()) {
							onChange([value[1], parsedDate]);
							setStartInputValue(endInputValue);
							setEndInputValue(inputValue);
						} else {
							onChange([parsedDate, value[1]]);
							setMonth(parsedDate);
						}
					}
				} else if (!inputValue.length) {
					onChange([null, null]);
					setEndInputValue("");
				}
			}
		};

		const handleEndInputChange = (inputValue: string) => {
			if (mode === "range") {
				setEndInputValue(inputValue);

				if (inputValue.length === 10) {
					const parsedDate = parse(inputValue, dateFormat, new Date());

					if (isValid(parsedDate)) {
						if (value[0] && parsedDate.getTime() < value[0].getTime()) {
							onChange([parsedDate, value[0]]);
							setStartInputValue(inputValue);
							setEndInputValue(startInputValue);
						} else {
							onChange([value[0], parsedDate]);
							setMonth(parsedDate);
						}
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
					<div className={s.wrap}>
						{modules.input?.enabled && (
							<div className={s.inputs}>
								{mode === "single" && (
									<Input
										ref={ref}
										value={inputValue}
										placeholder={dateFormat}
										mask={DATE_MASK}
										// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
										pipe={autoCorrectedDatePipe}
										onChange={(e) => handleInputChange(e.target.value)}
										// onOpenCalendar={() => setIsOpen(true)}
									/>
								)}
								{mode === "range" && (
									<>
										<Input
											readOnly
											ref={ref}
											value={startInputValue}
											placeholder={dateFormat}
											mask={DATE_MASK}
											// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
											pipe={autoCorrectedDatePipe}
											onChange={(e) => handleStartInputChange(e.target.value)}
											// onOpenCalendar={() => setIsOpen(true)}
										/>
										<Input
											readOnly
											value={endInputValue}
											placeholder={dateFormat}
											mask={DATE_MASK}
											// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
											pipe={autoCorrectedDatePipe}
											onChange={(e) => handleEndInputChange(e.target.value)}
											// onOpenCalendar={() => setIsOpen(true)}
										/>
									</>
								)}
							</div>
						)}
					</div>
					<div className={s.calendar}>
						<div className={s.heading}>
							{mode === "single" && <p>{inputValue} </p>}
							{mode === "range" && (
								<p>
									{startInputValue}
									{startInputValue && endInputValue && " - "}
									{endInputValue}
								</p>
							)}
						</div>
						{mode === "single" && (
							<DatePicker
								selected={value}
								onChange={(e) => handleSingleSelect(e)}
								inline
							/>
						)}

						{mode === "range" && (
							<DatePicker
								selected={month}
								onChange={(e) => handleRangeSelect(e)}
								startDate={value[0] ?? undefined}
								endDate={value[1] ?? undefined}
								selectsRange
								inline
							/>
						)}
					</div>
				</InputWrapper>
			</div>
		);
	}
);

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
