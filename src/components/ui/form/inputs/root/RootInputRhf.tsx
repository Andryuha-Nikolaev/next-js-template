"use client";

import { Controller } from "react-hook-form";

import RootInput, { type RootInputProps } from "./RootInput";

interface RootInputRhfProps extends RootInputProps {
	name: string;
}

const RootInputRhf = ({ name, ...restProps }: RootInputRhfProps) => {
	// const [value, setValue] = useState("");

	// console.log(value);

	return (
		<Controller
			name={name}
			defaultValue=""
			rules={{ required: "aaaaaa" }}
			render={({ field }) => <RootInput {...field} {...restProps} />}
		/>
	);
};

export default RootInputRhf;
