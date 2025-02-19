import RHFInput from "./RHFInput";
import type { RHFInputProps } from "./types";

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
