import Slider from "rc-slider";

import type { SliderFieldProps } from "@/types/form/sliderField";

import s from "./SliderField.module.scss";

import InputWrapper from "../components/wrapper/InputWrapper";

const SliderField = ({
	type,
	value,
	onChange,
	errorMessage,
	isRequired,
	label,
	...restProps
}: SliderFieldProps) => {
	return (
		<div className={s.block}>
			<InputWrapper
				errorMessage={errorMessage}
				label={label}
				isRequired={isRequired}
			>
				{type === "single" && (
					<Slider
						{...restProps}
						value={value}
						onChange={(e) => onChange(e as number)}
					/>
				)}
			</InputWrapper>
		</div>
	);
};

export default SliderField;
