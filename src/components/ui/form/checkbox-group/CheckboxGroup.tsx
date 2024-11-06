import parse from "html-react-parser";

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
	chooseAllCheckbox,
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
				{chooseAllCheckbox && (
					<Checkbox
						checked={items.length === value.length}
						value={chooseAllCheckbox}
						onChange={() =>
							onChange(
								items.length === value.length
									? []
									: items.map((item) => item.value)
							)
						}
					>
						<p className={s.text}>{chooseAllCheckbox}</p>
					</Checkbox>
				)}
				{items.map((item, i) => (
					<Checkbox
						checked={value.includes(item.value)}
						key={i}
						value={item.value}
						onChange={(e) => handleChange(e.target.value)}
					>
						{typeof item.label === "string" ? (
							<p className={s.text}>{parse(item.label)}</p>
						) : (
							item.label
						)}
					</Checkbox>
				))}
			</div>
		</InputWrapper>
	);
};

export default CheckboxGroup;
