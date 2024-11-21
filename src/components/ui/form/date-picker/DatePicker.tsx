"use client";

import { DayPicker } from "react-day-picker";

import type { DatePickerProps } from "@/types/form/datePicker";

import s from "./DatePicker.module.scss";

import InputWrapper from "../inputs/components/wrapper/InputWrapper";

const DatePicker = ({
	errorMessage,
	label,
	isRequired,
	...props
}: DatePickerProps) => {
	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<div className={s.picker}>
					<DayPicker {...props} />
				</div>
			</InputWrapper>
		</div>
	);
};

export default DatePicker;
