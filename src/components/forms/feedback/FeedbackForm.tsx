import { FormProvider, useForm } from "react-hook-form";

import RootButton from "@/components/ui/buttons/root/RootButton";
import RootInputRhf from "@/components/ui/form/inputs/root/RootInputRhf";

import s from "./FeedbackForm.module.scss";

import FormWrapper from "../wrapper/FormWrapper";

const FeedbackForm = () => {
	const methods = useForm();

	const {
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className={s.block}>
			<FormProvider {...methods}>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<FormWrapper isLoading={isSubmitting} title="Обратная связь">
						<RootInputRhf name="name" placeholder="Имя" />
					</FormWrapper>
				</form>
			</FormProvider>
		</div>
	);
};

export default FeedbackForm;
