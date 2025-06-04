/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useCallback, useEffect, useState } from "react";

import Slider from "rc-slider";
import { useDebounceCallback as debounce } from "usehooks-ts";

import type { SliderFieldProps } from "@/shared/ui/fields/slider/model/types";

import s from "./SliderField.module.scss";

import { Input } from "../../input";
import { InputWrapper } from "../../input-wrapper";

const NUMBER_REGEX = /^\d+$/;
const DEBOUNCE_MS = 700;

export const SliderField = ({
	type,
	value,
	onChange,
	errorMessage,
	isRequired,
	label,
	min = 0,
	max = 100,
	...restProps
}: SliderFieldProps) => {
	const isSingle = type === "single";

	const [firstValue, setFirstValue] = useState(isSingle ? value : value[0]);

	const [secondValue, setSecondValue] = useState(isSingle ? value : value[1]);
	const [sliderValue, setSliderValue] = useState(value);

	// Reset form values when `value` prop changes
	useEffect(() => {
		const newFirstValue = isSingle ? (value as number) : (value as number[])[0];
		const newSecondValue = isSingle
			? (value as number)
			: (value as number[])[1];

		setFirstValue(newFirstValue);
		setSecondValue(newSecondValue);
		setSliderValue(value);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const handleInputValidate = (value: number) => value >= min && value <= max;

	const handleInputNumberValidate = (value: string) =>
		!value || NUMBER_REGEX.test(value);

	function insertSpaces(inputStr: string) {
		const str = inputStr.toString();
		return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
	}

	function removeSpaces(inputStr: string) {
		return inputStr.replace(/\s+/g, "");
	}

	const handleSingleValue = useCallback(
		debounce((newValue: string) => {
			const numericValue = +newValue;
			if (handleInputValidate(numericValue)) {
				onChange(numericValue);
			} else {
				setFirstValue(value as number);
			}
		}, DEBOUNCE_MS),
		[value, onChange]
	);

	const handleChangeFirstValue = useCallback(
		debounce((newValue: string) => {
			const numericValue = +newValue;
			if (handleInputValidate(numericValue) && numericValue <= secondValue) {
				onChange([numericValue, secondValue]);
			} else {
				setFirstValue((value as number[])[0]);
			}
		}, DEBOUNCE_MS),
		[value, secondValue, onChange]
	);

	const handleChangeSecondValue = useCallback(
		debounce((newValue: string) => {
			const numericValue = +newValue;
			if (handleInputValidate(numericValue) && firstValue <= numericValue) {
				onChange([firstValue, numericValue]);
			} else {
				setSecondValue((value as number[])[1]);
			}
		}, DEBOUNCE_MS),
		[value, firstValue, onChange]
	);

	const handleInputChange = (newValue: string, isFirstInput: boolean) => {
		const numericValue = removeSpaces(newValue);

		if (handleInputNumberValidate(numericValue)) {
			if (isSingle) {
				setFirstValue(+numericValue);
				handleSingleValue(numericValue);
			} else if (isFirstInput) {
				setFirstValue(+numericValue);
				handleChangeFirstValue(numericValue);
			} else {
				setSecondValue(+numericValue);
				handleChangeSecondValue(numericValue);
			}
		}
	};

	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<div className={s.sliderWrap}>
					<Slider
						ariaLabelForHandle={label || "Изменить значение"}
						className={s.slider}
						classNames={{ rail: s.rail, handle: s.handle, track: s.track }}
						{...restProps}
						value={sliderValue}
						onChange={(e) => {
							setSliderValue(e);
							if (isSingle) {
								setFirstValue(e as number);
							} else {
								const [first, second] = e as number[];
								setFirstValue(first);
								setSecondValue(second);
							}
						}}
						onChangeComplete={(e) => {
							onChange(e);
						}}
						range={!isSingle}
						min={min}
						max={max}
					/>
				</div>

				<div className={s.inputs}>
					{isSingle && (
						<Input
							aria-label={label}
							value={insertSpaces(firstValue.toString())}
							onChange={(event) => handleInputChange(event.target.value, true)}
							hiddenReset={firstValue === min}
							disabled={restProps.disabled}
						/>
					)}
					{!isSingle && (
						<>
							<Input
								aria-label={label}
								value={insertSpaces(firstValue.toString())}
								onChange={(event) =>
									handleInputChange(event.target.value, true)
								}
								hiddenReset={firstValue === min}
								disabled={restProps.disabled}
							/>
							<p>-</p>
							<Input
								aria-label={label}
								value={insertSpaces(secondValue.toString())}
								onChange={(event) =>
									handleInputChange(event.target.value, false)
								}
								onResetField={() => {
									setSecondValue(max);
									onChange([value[0], max]);
								}}
								hiddenReset={secondValue === max}
								disabled={restProps.disabled}
							/>
						</>
					)}
				</div>
			</InputWrapper>
		</div>
	);
};
