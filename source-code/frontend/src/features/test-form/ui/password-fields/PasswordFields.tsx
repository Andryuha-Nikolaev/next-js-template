import { FieldNames } from "@/shared/constants/fields";
import { RHFInput } from "@/shared/ui/fields/input";

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
