import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

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

	return (
		<FormProvider {...methods}>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<FormWrapper isLoading={isSubmitting} title="Обратная связь">
					<RootInput name="name" placeholder="Имя" />
				</FormWrapper>
			</form>
		</FormProvider>
	);
};

export default FeedbackForm;
