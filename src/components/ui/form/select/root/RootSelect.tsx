"use client";

import { useState } from "react";

import {
	Controller,
	useFormContext,
	type FieldValues,
	type RegisterOptions,
} from "react-hook-form";
import Select from "react-select";

import s from "./RootSelect.module.scss";

import FieldWrapper from "../../field-wrapper/FieldWrapper";

interface RootSelectItem {
	value: string;
	label: string;
}

interface RootSelectProps {
	items: RootSelectItem[];
	name: string;
	label?: string;
	placeholder?: string;
	options?: RegisterOptions<FieldValues>;
}

const RootSelect = ({
	items,
	name,
	label,
	options,
	placeholder,
}: RootSelectProps) => {
	const { control } = useFormContext();

	const [selectedOption, setSelectedOption] = useState<RootSelectItem | null>(
		null
	);

	return (
		<FieldWrapper
			isRequired={!!options?.required}
			name={name}
			placeholder={placeholder}
			label={label}
		>
			<Controller
				control={control}
				name={name}
				render={({ field: { value, onChange, ...field } }) => (
					<Select
						className={s.container}
						isSearchable={false}
						placeholder={""}
						options={items}
						defaultValue={selectedOption}
						onChange={(e) => {
							setSelectedOption(e);
							onChange(e?.value);
						}}
						classNamePrefix="react-select"
						{...field}
					/>
				)}
				rules={options}
			/>
		</FieldWrapper>
	);
};

export default RootSelect;
