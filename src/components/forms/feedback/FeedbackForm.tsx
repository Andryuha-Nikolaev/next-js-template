"use client";

import { useEffect, useState } from "react";

import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import PhoneInput from "@/components/ui/form/inputs/phone/PhoneInput";
import RootInput from "@/components/ui/form/inputs/root/RootInput";

import s from "./FeedbackForm.module.scss";

import FormWrapper from "../wrapper/FormWrapper";

interface FeedbackFormFields {
	name: string;
}

const FeedbackForm = () => {
	const methods = useForm<FeedbackFormFields>();

	const {
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<FeedbackFormFields> = (values) => {
		console.log(values);
	};

	const [formKey, setFormKey] = useState(1);

	useEffect(() => {
		setTimeout(() => {
			setFormKey(2);
		}, 2000);
	}, []);

	return (
		<>
			<FormProvider {...methods}>
				<form
					key={formKey}
					className={s.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<FormWrapper isLoading={isSubmitting} title="Обратная связь">
						<RootInput name="name" placeholder="Имя" label="Имя" />
						<PhoneInput name="phone" />
						<RootInput name="password" placeholder="Пароль" type="password" />
					</FormWrapper>
				</form>
			</FormProvider>
		</>
	);
};

export default FeedbackForm;
