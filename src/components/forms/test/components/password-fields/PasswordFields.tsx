import RHFInput from "@/components/ui/fields/input/RHFInput";
import { FieldNames } from "@/shared/constants/fields";

const PasswordFields = () => {
	return (
		<>
			<RHFInput
				name={FieldNames.PASSWORD}
				placeholder="Пароль"
				label="Пароль"
				type="password"
			/>
			<RHFInput
				name={FieldNames.CONFIRM_PASSWORD}
				placeholder="Подтвердите пароль"
				label="Подтвердите пароль"
				type="password"
			/>
		</>
	);
};

export default PasswordFields;
