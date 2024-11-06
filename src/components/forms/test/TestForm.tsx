"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import RootCheckboxGroup from "@/components/ui/form/checkbox-group/RootCheckboxGroup";
import RootCheckbox from "@/components/ui/form/checkbox/RootCheckbox";
import RootFileInput from "@/components/ui/form/inputs/file/RootFileInput";
import PhoneInput from "@/components/ui/form/inputs/phone/PhoneInput";
import RootInput from "@/components/ui/form/inputs/root/RootInput";
import RootTextarea from "@/components/ui/form/inputs/textarea/RootTextarea";
import { useModal } from "@/context/modal/ModalProvider";
import { sendFormData } from "@/services/sendFormDataService";
import { valuesToFormData } from "@/utils/form/submitUtils";

import {
	feedbackDefaultValues,
	feedbackSchema,
	type FeedbackSchemaType,
} from "./schema";
import s from "./TestForm.module.scss";

import FormWrapper from "../wrapper/FormWrapper";

const TestForm = () => {
	const methods = useForm<FeedbackSchemaType>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: feedbackDefaultValues,
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const { showSuccessModal, showErrorModal } = useModal();

	const onSubmit: SubmitHandler<FeedbackSchemaType> = async (values) => {
		await sendFormData("feedback", valuesToFormData(values))
			.then(() => {
				reset();
				showSuccessModal();
			})
			.catch((e) => {
				console.error(e);
				showErrorModal();
			});
	};

	return (
		<>
			<FormProvider {...methods}>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<FormWrapper isLoading={isSubmitting} title="Обратная связь">
						<RootInput name="name" placeholder="Имя" label="Имя" />
						<RootInput name="email" placeholder="Email" label="Email" />
						<PhoneInput name="phone" label="Телефон" />
						<RootInput
							name="password"
							placeholder="Пароль"
							label="Пароль"
							type="password"
							isRequired
						/>
						<RootTextarea name="text" placeholder="Текст" label="Текст" />
						<RootFileInput
							label="Файл с превью"
							name="file"
							fileSize="Максимальный размер файла - 5MB."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
							withPreview
							isRequired
						/>
						<RootFileInput
							name="files"
							multiple
							label="Несколько файлов"
							buttonText="Прикрепить файлы"
							fileSize="Максимальный размер файлов - 10MB."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
						/>
						<RootCheckbox name="policy">
							<small>
								Я&nbsp;ознакомлен(а) с&nbsp;
								<a
									className={s.link}
									href="/policy.pdf"
									rel="noreferrer"
									target="_blank"
								>
									Политикой конфиденциальности
								</a>
							</small>
						</RootCheckbox>
						<RootCheckboxGroup
							name="checkbox-group"
							items={["Первый чекбокс", "Второй чекбокс", "Третий чекбокс"]}
							label="Группа чекбоксов"
						/>
					</FormWrapper>
				</form>
			</FormProvider>
		</>
	);
};

export default TestForm;
