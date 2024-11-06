import { useState } from "react";

import CheckboxGroup from "./CheckboxGroup";

interface RootCheckboxGroupProps {}

const RootCheckboxGroup = ({}: RootCheckboxGroupProps) => {
	const [value, setValue] = useState<string[] | false>(["aaaaaaa"]);

	console.log(value);

	return (
		<CheckboxGroup
			items={[
				{ value: "aaaaaaa", children: "aaaaaaaaaaaaa" },
				{ value: "bbbbbbb", children: "bbbbbbbb" },
				{ value: "cccccc", children: "cccccccc" },
			]}
			value={value}
			onChange={(e) => setValue(e)}
		/>
	);
};

export default RootCheckboxGroup;
