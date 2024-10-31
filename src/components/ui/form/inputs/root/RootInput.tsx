"use client";

import { Controller } from "react-hook-form";

import Input, { type InputProps } from "./Input";

interface RootInputProps extends InputProps {
	name: string;
}

const RootInput = ({ name, ...restProps }: RootInputProps) => {
	return (
		<Controller
			name={name}
			defaultValue=""
			rules={{ required: "aaaaaa" }}
			render={({ field }) => <Input {...field} {...restProps} />}
		/>
	);
};

export default RootInput;
