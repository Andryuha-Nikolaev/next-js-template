import s from "./CheckboxGroup.module.scss";

import Checkbox from "../checkbox/Checkbox";

interface CheckboxGroupProps {
	items: { value: string; children: React.ReactNode }[];
	onChange: (value: string[] | false) => void;
	value: string[] | false;
}

const CheckboxGroup = ({ items, value, onChange }: CheckboxGroupProps) => {
	const handleChange = (checkboxValue: string) => {
		if (value) {
			if (value.includes(checkboxValue)) {
				const newValue = value.filter((item) => item !== checkboxValue);
				onChange(newValue.length ? newValue : false);
			} else {
				const newValue = [...value, checkboxValue];
				onChange(newValue);
			}
		} else {
			onChange([checkboxValue]);
		}
	};

	return (
		<div className={s.block}>
			{items.map((item, i) => (
				<Checkbox
					checked={value && value.includes(item.value)}
					key={i}
					value={item.value}
					onChange={(e) => handleChange(e.target.value)}
				>
					{item.children}
				</Checkbox>
			))}
		</div>
	);
};

export default CheckboxGroup;
