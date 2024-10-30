import { FormProvider, useForm } from "react-hook-form";

import RootButton from "@/components/ui/buttons/root/RootButton";
import RootInputRhf from "@/components/ui/form/inputs/root/RootInputRhf";

import s from "./FeedbackForm.module.scss";

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
				<form onSubmit={handleSubmit(onSubmit)}>
					<RootInputRhf name="name" />
					<RootInputRhf
						name="phone"
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
					/>
					<RootButton type="submit">Отправить</RootButton>
				</form>
			</FormProvider>
		</div>
	);
};

export default FeedbackForm;
