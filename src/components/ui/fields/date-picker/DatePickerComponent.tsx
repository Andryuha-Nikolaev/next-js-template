"use client";

import { forwardRef, useEffect, useState } from "react";

import { format, isValid, parse } from "date-fns";
import DatePicker from "react-datepicker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import type {
	DatePickerComponentProps,
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
			modules = { input: { enabled: true } },
			...props
		},
		ref
	) => {
		const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;

		const [inputValue, setInputValue] = useState(
			value ? format(value, dateFormat) : ""
		);

		// const [month, setMonth] = useState(
		// 	 value ? value : null
		// );

		useEffect(() => {
			if (!value) {
				setInputValue("");
			}
		}, [value]);

		const handleSingleSelect = (date: SingleValue) => {
			onChange(date);

			if (!date) {
				setInputValue("");
			} else {
				setInputValue(format(date, dateFormat));
			}
		};

		const handleInputChange = (inputValue: string) => {
			setInputValue(inputValue);

			if (inputValue.length === 10) {
				const parsedDate = parse(inputValue, dateFormat, new Date());

				if (isValid(parsedDate)) {
					onChange(parsedDate);
				}
			} else if (!inputValue.length) {
				onChange(null);
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
							</div>
						)}
					</div>
					<div className={s.calendar}>
						{/* <div className={s.heading}>
							{mode === "single" && <p>{inputValue} </p>}
							{mode === "range" && (
								<p>
									{startInputValue}
									{startInputValue && endInputValue && " - "}
									{endInputValue}
								</p>
							)}
						</div> */}

						<DatePicker
							selected={value}
							onChange={(e) => handleSingleSelect(e)}
							inline
							{...props}
						/>
					</div>
				</InputWrapper>
			</div>
		);
	}
);

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
