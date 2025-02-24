"use client";

import { forwardRef, useEffect, useId, useRef, useState } from "react";

import clsx from "clsx";
import { format, isValid, parse } from "date-fns";
import DatePicker from "react-datepicker";
import { IMaskInput } from "react-imask";

import useClickOutside from "@/shared/hooks/other/useClickOutside";
import type {
	DatePickerComponentProps,
	SingleValue,
} from "@/shared/ui/fields/date-picker/types";

import s from "./DatePickerComponent.module.scss";

import InputWrapper from "../input-wrapper/InputWrapper";
import Input from "../input/Input";

const DATE_FORMAT = "dd.MM.yyyy";
const DATE_TIME_FORMAT = "dd.MM.yyyy HH:mm";
const DATE_PLACEHOLDER = "dd.MM.yyyy";
const DATE_TIME_PLACEHOLDER = "dd.mm.yyyy HH:MM";
// const DATE_MASK = Date;
// const DATE_TIME_MASK = "00.00.0000 00:00";

const DatePickerComponent = forwardRef<
	HTMLInputElement,
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
			inline,
			withInput = true,
			modalPositionY = "bottom",
			modalPositionX = "left",
			disabled,
			...props
		},
		ref
	) => {
		const dateFormat = time ? DATE_TIME_FORMAT : DATE_FORMAT;
		const placeholder = time ? DATE_TIME_PLACEHOLDER : DATE_PLACEHOLDER;

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

		// for reset form
		const [isInputChanging, setIsInputChanging] = useState(false);
		useEffect(() => {
			if (!isInputChanging) {
				if (!value) {
					setInputValue("");
				} else {
					setInputValue(format(value, dateFormat));
				}
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [value]);

		const handleSingleSelect = (date: SingleValue) => {
			setIsInputChanging(true);
			onChange(date);
			setIsOpen(false);
			if (!date) {
				setInputValue("");
			} else {
				setInputValue(format(date, dateFormat));
			}
			setTimeout(() => setIsInputChanging(false));
		};

		const handleInputChange = (inputValue: string) => {
			console.log(inputValue);

			setIsInputChanging(true);
			setInputValue(inputValue);
			const format = inputValue.length === 10 ? DATE_FORMAT : DATE_TIME_FORMAT;
			const parsedDate = parse(inputValue, format, new Date());

			if (isValid(parsedDate)) {
				onChange(parsedDate);
			} else if (value) {
				onChange(null);
			}

			// const trimmedValue = inputValue.trim();

			// const isProperLength =
			// 	(!time && trimmedValue.length === 10) ||
			// 	(time && trimmedValue.length === 16);

			// if (isProperLength) {
			// 	const format =
			// 		trimmedValue.length === 10 ? DATE_FORMAT : DATE_TIME_FORMAT;
			// 	const parsedDate = parse(trimmedValue, format, new Date());

			// 	const isOutOfRange =
			// 		(props.maxDate && parsedDate.getTime() > props.maxDate.getTime()) ||
			// 		(props.minDate && parsedDate.getTime() < props.minDate.getTime());

			// 	if (isValid(parsedDate) && !isOutOfRange) {
			// 		onChange(parsedDate);
			// 	} else if (value) {
			// 		onChange(null);
			// 	}
			// } else if (value) {
			// 	onChange(null);
			// }

			setTimeout(() => setIsInputChanging(false));
		};

		const id = useId();

		console.log(props.minDate, props.maxDate);

		return (
			<div className={s.block}>
				<InputWrapper
					errorMessage={errorMessage}
					label={label}
					isRequired={isRequired}
					id={id}
				>
					<div ref={wrapRef} className={s.wrap}>
						{withInput && (
							<div className={s.inputs}>
								<Input
									id={id}
									ref={ref}
									value={inputValue}
									placeholder={placeholder}
									onChange={(e) => handleInputChange(e.target.value)}
									onFocus={() => setIsOpen(true)}
									onOpenCalendar={() => setIsOpen(true)}
									disabled={disabled}
									MaskedInputComponent={
										<IMaskInput
											mask={Date}
											pattern={"d.m`.`Y"}
											autofix={"pad"}
											min={props.minDate || new Date(1900, 1, 1)}
											max={props.maxDate || new Date(2500, 1, 1)}
											overwrite
										/>
									}
								/>
							</div>
						)}

						<div
							className={clsx(
								s.calendar,
								!inline && s.modal,
								isOpen && s.open,
								s[modalPositionX],
								s[modalPositionY],
								disabled && s.isDisabled
							)}
						>
							<DatePicker
								selected={value}
								onChange={(e) => handleSingleSelect(e)}
								inline
								{...props}
							>
								{props.selectsStart || props.selectsEnd ? (
									<>
										{props.startDate ? format(props.startDate, dateFormat) : ""}
										{(props.startDate || props.endDate) && " - "}
										{props.endDate ? format(props.endDate, dateFormat) : ""}
									</>
								) : (
									<>{value ? format(value, dateFormat) : ""}</>
								)}
							</DatePicker>
						</div>
					</div>
				</InputWrapper>
			</div>
		);
	}
);

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
