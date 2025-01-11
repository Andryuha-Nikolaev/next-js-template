"use client";

import { useEffect, useState } from "react";

import Slider from "rc-slider";

import type { SliderFieldProps } from "@/types/form/sliderField";

import s from "./SliderField.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const NUMBER_REGEX = /^-?\d+$/;

const SliderField = ({
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

	// for reset form

	useEffect(() => {
		setFirstValue(isSingle ? value : value[0]);
		setSecondValue(isSingle ? value : value[1]);
		setSliderValue(value);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const handleInputValidate = (value: string) => {
		if (!value) {
			return true;
		}
		if (NUMBER_REGEX.test(value) && +value >= min && +value <= max) {
			return true;
		}
		return false;
	};

	function insertSpaces(inputStr: string) {
		const str = inputStr.toString();
		return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
	}

	function removeSpaces(inputStr: string) {
		return inputStr.replace(/\s+/g, "");
	}

	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<Slider
					{...restProps}
					value={sliderValue}
					onChange={(e) => {
						setSliderValue(e);
						setFirstValue(typeof e === "number" ? e : e[0]);
						setSecondValue(typeof e === "number" ? e : e[1]);
					}}
					onChangeComplete={(e) => {
						onChange(e);
					}}
					range={type === "range"}
					min={min}
					max={max}
				/>
				<div className={s.inputs}>
					{isSingle && (
						<Input
							value={insertSpaces(sliderValue.toString())}
							onChange={(event) => {
								const newValue = removeSpaces(event.target.value);

								if (handleInputValidate(newValue)) {
									onChange(+newValue);
								}
							}}
						/>
					)}
					{!isSingle && (
						<>
							<Input
								value={insertSpaces(firstValue.toString())}
								onChange={(event) => {
									const newValue = removeSpaces(event.target.value);

									if (handleInputValidate(newValue)) {
										setFirstValue(+newValue);
										if (+newValue <= value[1]) {
											onChange([+newValue, value[1]]);
										}
									}
								}}
								hiddenReset={firstValue === min}
							/>
							<p>-</p>
							<Input
								value={insertSpaces(secondValue.toString())}
								onChange={(event) => {
									const newValue = removeSpaces(event.target.value);

									if (handleInputValidate(newValue)) {
										setSecondValue(+newValue);
										if (value[0] <= +newValue) {
											onChange([value[0], +newValue]);
										}
									}
								}}
								onResetField={() => {
									setSecondValue(max);
									onChange([value[0], max]);
								}}
								hiddenReset={secondValue === max}
							/>
						</>
					)}
				</div>
			</InputWrapper>
		</div>
	);
};

export default SliderField;
