"use client";

import { forwardRef } from "react";

import DateTimePicker from "react-datetime-picker";

import type { DatePickerComponentProps } from "@/types/form/datePicker";

import s from "./DatePickerComponent.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const DatePickerComponent = forwardRef<
	HTMLLabelElement,
	DatePickerComponentProps
>(({ errorMessage, label, isRequired, ...restProps }, _ref) => {
	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<DateTimePicker {...restProps} format="dd.MM.yyyy" />
			</InputWrapper>
		</div>
	);
});

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
