import type { RHFInputProps } from "@/types/form/input";

import RHFInput from "./RHFInput";

const RHFPhoneInput = ({ ...props }: RHFInputProps) => {
	return (
		<RHFInput
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

export default RHFPhoneInput;
