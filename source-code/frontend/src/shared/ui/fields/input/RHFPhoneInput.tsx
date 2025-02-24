import { IMaskInput } from "react-imask";

import RHFInput from "./RHFInput";
import type { RHFInputProps } from "./types";

const RHFPhoneInput = ({ ...props }: RHFInputProps) => {
	return (
		<RHFInput
			type="tel"
			placeholder="+7 (___) ___ __ __"
			{...props}
			MaskedInputComponent={
				<IMaskInput unmask={true} mask="+{7} (000) 000 00 00" />
			}
		/>
	);
};

export default RHFPhoneInput;
