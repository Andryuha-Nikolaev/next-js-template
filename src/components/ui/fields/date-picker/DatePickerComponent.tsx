"use client";

import { forwardRef, useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { format, isValid, parse } from "date-fns";
import DatePicker from "react-datepicker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import useClickOutside from "@/hooks/other/useClickOutside";
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
			modules = {
				input: { enabled: true },
				calendar: { enabled: true, inline: false },
			},
			modalPosition = "bottom",
			...props
		},
		ref
	) => {
		const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;

		const [inputValue, setInputValue] = useState(
			value ? format(value, dateFormat) : ""
		);

		const [customError, setCustomError] = useState("");

		const [isOpen, setIsOpen] = useState(false);
		const wrapRef = useRef<HTMLDivElement>(null);
		const closeModal = () => {
			setIsOpen(false);
		};
		useClickOutside({
			elementRefs: [wrapRef],
			isOpen: isOpen,
			onClose: closeModal,
		});

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
					if (props.maxDate && parsedDate.getTime() > props.maxDate.getTime()) {
						setCustomError(`Дата начала не может быть позднее даты окончания`);
					} else if (
						props.minDate &&
						parsedDate.getTime() < props.minDate.getTime()
					) {
						setCustomError(`Дата окончания не может быть раньше даты начала`);
					} else {
						onChange(parsedDate);
						setCustomError("");
					}
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
					errorMessage={errorMessage || customError}
					label={label}
					isRequired={isRequired}
				>
					<div ref={wrapRef} className={s.wrap}>
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
									// onLabelFocus={() => setIsOpen(true)}
									// onOpenCalendar={() => setIsOpen(true)}
								/>
							</div>
						)}
						{modules.calendar?.enabled && (
							<div
								className={clsx(
									s.calendar,
									!modules.calendar?.inline && s.modal,
									isOpen && s.open,
									s[modalPosition]
								)}
							>
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
						)}
					</div>
				</InputWrapper>
			</div>
		);
	}
);

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
