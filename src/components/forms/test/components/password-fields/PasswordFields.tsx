import { useEffect } from "react";

import { useFormContext } from "react-hook-form";

import RHFInput from "@/components/ui/fields/input/RHFInput";
import { FieldName } from "@/constants/fields";

import type { FormSchemaType } from "../../schema";

const PasswordFields = () => {
	const {
		watch,
		setError,
		clearErrors,
		formState: { submitCount },
	} = useFormContext<FormSchemaType>();
	const password = watch(FieldName.PASSWORD);
	const confirmPassword = watch(FieldName.CONFIRM_PASSWORD);

	useEffect(() => {
		if (submitCount > 0) {
			if (password !== confirmPassword) {
				setError(FieldName.CONFIRM_PASSWORD, {
					message: "Пароли не совпадают",
				});
			} else {
				clearErrors(FieldName.CONFIRM_PASSWORD);
			}
		}
	}, [submitCount, password, confirmPassword]);

	return (
		<>
			<RHFInput
				name={FieldName.PASSWORD}
				placeholder="Пароль"
				label="Пароль"
				type="password"
			/>
			<RHFInput
				name={FieldName.CONFIRM_PASSWORD}
				placeholder="Подтвердите пароль"
				label="Подтвердите пароль"
				type="password"
			/>
		</>
	);
};

export default PasswordFields;
