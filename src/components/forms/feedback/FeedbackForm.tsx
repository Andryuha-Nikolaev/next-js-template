"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import PhoneInput from "@/components/ui/form/inputs/phone/PhoneInput";
import RootInput from "@/components/ui/form/inputs/root/RootInput";

import s from "./FeedbackForm.module.scss";
import {
	feedbackDefaultValues,
	feedbackSchema,
	type FeedbackSchemaType,
} from "./schema";

import FormWrapper from "../wrapper/FormWrapper";

const FeedbackForm = () => {
	const methods = useForm<FeedbackSchemaType>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: feedbackDefaultValues,
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<FeedbackSchemaType> = (values) => {
		console.log(values);
		reset();
	};

	return (
		<>
			<FormProvider {...methods}>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<FormWrapper isLoading={isSubmitting} title="Обратная связь">
						<RootInput name="name" placeholder="Имя" label="Имя" />
						<RootInput name="email" placeholder="Email" />
						<PhoneInput name="phone" />
						<RootInput name="password" placeholder="Пароль" type="password" />
					</FormWrapper>
				</form>
			</FormProvider>
		</>
	);
};

export default FeedbackForm;
