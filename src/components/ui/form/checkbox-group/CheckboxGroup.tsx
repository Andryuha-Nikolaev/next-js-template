import type { CheckboxGroupProps } from "@/types/checkboxGroup";

import s from "./CheckboxGroup.module.scss";

import Checkbox from "../checkbox/Checkbox";
import InputWrapper from "../inputs/components/wrapper/InputWrapper";

const CheckboxGroup = ({
	items,
	value,
	onChange,
	errorMessage,
	isRequired,
	label,
}: CheckboxGroupProps) => {
	const handleChange = (checkboxValue: string) => {
		if (value.includes(checkboxValue)) {
			const newValue = value.filter((item) => item !== checkboxValue);
			onChange(newValue);
		} else {
			const newValue = [...value, checkboxValue];
			onChange(newValue);
		}
	};

	return (
		<InputWrapper
			errorMessage={errorMessage}
			label={label}
			isRequired={isRequired}
		>
			<div className={s.block}>
				{items.map((item, i) => (
					<Checkbox
						checked={value && value.includes(item)}
						key={i}
						value={item}
						onChange={(e) => handleChange(e.target.value)}
					>
						<p>{item}</p>
					</Checkbox>
				))}
			</div>
		</InputWrapper>
	);
};

export default CheckboxGroup;
