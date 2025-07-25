"use client";

import { forwardRef, useEffect, useId, useRef, useState } from "react";

import {
	maskitoDateOptionsGenerator,
	maskitoDateTimeOptionsGenerator,
} from "@maskito/kit";
import { useMaskito } from "@maskito/react";
import clsx from "clsx";
import { format, isValid, parse } from "date-fns";
import { ru } from "date-fns/locale/ru";
import DatePicker, { registerLocale } from "react-datepicker";

import useClickOutside from "$shared/hooks/other/useClickOutside";
import type {
	DatePickerComponentProps,
	SingleValue,
} from "$shared/ui/fields/date-picker/model/types";

import s from "./DatePickerComponent.module.scss";

import { Input } from "../../input";
import { InputWrapper } from "../../input-wrapper";

const DATE_FORMAT = "dd.MM.yyyy";
const DATE_TIME_FORMAT = "dd.MM.yyyy HH:mm";
const DATE_PLACEHOLDER = "dd.mm.yyyy";
const DATE_TIME_PLACEHOLDER = "dd.mm.yyyy HH:MM";

export const DatePickerComponent = forwardRef<
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
			isAutoCorrectMinMaxDate = true,
			...props
		},
		ref
	) => {
		registerLocale("ru", ru);

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
			setIsInputChanging(true);
			setInputValue(inputValue);

			if (inputValue.length === 10 || inputValue.length === 16) {
				const parsedDate = parse(inputValue, dateFormat, new Date());
				if (isValid(parsedDate)) {
					onChange(parsedDate);
				} else {
					onChange(null);
				}
			} else {
				onChange(null);
			}
			setTimeout(() => setIsInputChanging(false));
		};

		const minMaxAutoCorrectProps = isAutoCorrectMinMaxDate
			? {
					min: props.minDate,
					max: props.maxDate,
				}
			: undefined;

		const dateOptions = maskitoDateOptionsGenerator({
			mode: "dd/mm/yyyy",
			separator: ".",
			...minMaxAutoCorrectProps,
		});

		const dateTimeOptions = maskitoDateTimeOptionsGenerator({
			dateMode: "dd/mm/yyyy",
			timeMode: "HH:MM",
			dateSeparator: ".",
			dateTimeSeparator: " ",
			...minMaxAutoCorrectProps,
		});

		const maskedInputRef = useMaskito({
			options: time ? dateTimeOptions : dateOptions,
		});

		const id = useId();

		return (
			<div className={s.block}>
				<InputWrapper
					errorMessage={withInput ? undefined : errorMessage}
					label={label}
					isRequired={isRequired}
					id={id}
				>
					<div ref={wrapRef} className={s.wrap}>
						{withInput && (
							<div className={s.inputs}>
								<Input
									id={id}
									ref={(el: HTMLInputElement | null) => {
										maskedInputRef(el);
										if (typeof ref === "function") {
											ref(el);
										}
									}}
									value={inputValue}
									placeholder={placeholder}
									onChange={(e) => handleInputChange(e.target.value)}
									onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
										handleInputChange(e.target.value)
									}
									onFocus={() => setIsOpen(true)}
									onOpenCalendar={() => setIsOpen(true)}
									disabled={disabled}
									errorMessage={errorMessage}
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
								locale="ru"
								selected={value}
								onChange={(e) => handleSingleSelect(e)}
								inline
								showMonthDropdown
								showYearDropdown
								dropdownMode="select"
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
