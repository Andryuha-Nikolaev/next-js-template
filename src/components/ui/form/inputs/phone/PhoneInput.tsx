import type { RootInputProps } from "@/types/input";

import RootInput from "../root/RootInput";

const PhoneInput = ({ ...props }: RootInputProps) => {
	return (
		<RootInput
			type="tel"
			placeholder="+7 (___) ___ __ __"
			mask={[
				"+",
				"7",
				" ",
				"(",
				/\d/,
				/\d/,
				/\d/,
				")",
				" ",
				/\d/,
				/\d/,
				/\d/,
				" ",
				/\d/,
				/\d/,
				" ",
				/\d/,
				/\d/,
			]}
			{...props}
		/>
	);
};

export default PhoneInput;
