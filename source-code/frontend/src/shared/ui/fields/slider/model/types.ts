import type { SliderProps } from "rc-slider";

import type { InputWrapperBaseProps } from "../../input-wrapper/model/types";

type BaseSliderFieldProps = InputWrapperBaseProps & SliderProps;

type SliderFieldVariants =
	| {
			type: "single";
			value: number;
			onChange: (value: number) => void;
	  }
	| {
			type: "range";
			value: number[];
			onChange: (value: number[]) => void;
	  };

export type SliderFieldProps = BaseSliderFieldProps & SliderFieldVariants;

export type RHFSliderFieldProps = BaseSliderFieldProps & {
	name: string;
};
