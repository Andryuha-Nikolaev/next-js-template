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
const DATE_TIME_FORMAT = "dd.MM.yyyy HH:mm";
const DATE_PLACEHOLDER = "dd.MM.yyyy";
const DATE_TIME_PLACEHOLDER = "dd.mm.yyyy HH:MM";
const AUTOCORRECT_FORMAT = "dd.mm.yyyy HH:MM";
const DATE_MASK = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];
const DATE_TIME_MASK = [
	/\d/,
	/\d/,
	".",
	/\d/,
	/\d/,
	".",
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	":",
	/\d/,
	/\d/,
];

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
			modalPositionY = "bottom",
			modalPositionX = "left",
			...props
		},
		ref
	) => {
		const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;
		const placeholder = time ? DATE_TIME_PLACEHOLDER : DATE_PLACEHOLDER;
		const mask = time ? DATE_TIME_MASK : DATE_MASK;

		const [inputValue, setInputValue] = useState(
			value ? format(value, dateFormat) : ""
		);

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

		// const [isInputChanging, setIsInputChanging] = useState(false)

		// 		useEffect(() => {
		// 			if (!value) {
		// 				setInputValue("");
		// 			}
		// 		}, [value]);

		const handleSingleSelect = (date: SingleValue) => {
			onChange(date);
			setIsOpen(false);
			if (!date) {
				setInputValue("");
			} else {
				setInputValue(format(date, dateFormat));
			}
		};

		const handleInputChange = (inputValue: string) => {
			setInputValue(inputValue);
			const trimmedValue = inputValue.trim();

			if (
				(!time && trimmedValue.length === 10) ||
				(time && trimmedValue.length === 16)
			) {
				const parsedDate = parse(
					trimmedValue,
					trimmedValue.length === 10 ? DATE_FORMAT : DATE_TIME_FORMAT,
					new Date()
				);

				if (isValid(parsedDate)) {
					if (props.maxDate && parsedDate.getTime() > props.maxDate.getTime()) {
						onChange(null);
					} else if (
						props.minDate &&
						parsedDate.getTime() < props.minDate.getTime()
					) {
						onChange(null);
					} else {
						onChange(parsedDate);
					}
				} else {
					onChange(null);
				}
			} else {
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
					<div ref={wrapRef} className={s.wrap}>
						{modules.input?.enabled && (
							<div className={s.inputs}>
								<Input
									ref={ref}
									value={inputValue}
									placeholder={placeholder}
									mask={mask}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
									pipe={autoCorrectedDatePipe}
									onChange={(e) => handleInputChange(e.target.value)}
									onLabelFocus={() => setIsOpen(true)}
									onOpenCalendar={() => setIsOpen(true)}
								/>
							</div>
						)}
						{modules.calendar?.enabled && (
							<div
								className={clsx(
									s.calendar,
									!modules.calendar?.inline && s.modal,
									isOpen && s.open,
									s[modalPositionX],
									s[modalPositionY]
								)}
							>
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
