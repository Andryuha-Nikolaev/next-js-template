import { useCallback, useEffect, useState } from "react";

import { debounce } from "lodash";
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
	const [firstValue, setFirstValue] = useState(
		type === "single" ? value : value[0]
	);
	const [secondValue, setSecondValue] = useState(
		type === "single" ? value : value[1]
	);

	// for reset form
	const [isInputChanging, setIsInputChanging] = useState(false);
	useEffect(() => {
		if (!isInputChanging) {
			setFirstValue(type === "single" ? value : value[0]);
			setSecondValue(type === "single" ? value : value[1]);
		}
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

	const handleChange = useCallback(
		debounce((value: number | number[]) => {
			if (typeof value !== "number" && value[0] > value[1]) {
				onChange([value[1], value[0]]);
				setFirstValue(secondValue);
				setSecondValue(firstValue);
			} else {
				onChange(value);
			}
		}, 500),
		[]
	);

	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				<Slider
					{...restProps}
					value={
						type === "single"
							? firstValue
							: firstValue <= secondValue
								? [firstValue, secondValue]
								: value
					}
					onChange={(e) => {
						setIsInputChanging(true);
						setFirstValue(typeof e === "number" ? e : e[0]);
						setSecondValue(typeof e === "number" ? e : e[1]);
					}}
					onChangeComplete={(e) => {
						onChange(e);
						setTimeout(() => setIsInputChanging(false));
					}}
					range={type === "range" ? true : false}
				/>
				<div className={s.inputs}>
					<Input
						value={firstValue.toString()}
						onChange={(event) => {
							const newValue = event.target.value;

							if (handleInputValidate(newValue)) {
								setFirstValue(+newValue);
								if (+newValue <= secondValue) {
									handleChange(
										type === "single" ? +newValue : [+newValue, +secondValue]
									);
								}
							}
						}}
					/>
					{type === "range" && (
						<Input
							value={secondValue.toString()}
							onChange={(event) => {
								const newValue = event.target.value;

								if (handleInputValidate(newValue)) {
									setSecondValue(+newValue);

									if (firstValue <= +newValue) {
										handleChange([+firstValue, +newValue]);
									}
								}
							}}
						/>
					)}
				</div>
			</InputWrapper>
		</div>
	);
};

export default SliderField;
