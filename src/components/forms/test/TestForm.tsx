"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import RootCheckboxGroup from "@/components/ui/form/checkbox-group/RootCheckboxGroup";
import RootCheckbox from "@/components/ui/form/checkbox/RootCheckbox";
import RootFileInput from "@/components/ui/form/inputs/file/RootFileInput";
import PhoneInput from "@/components/ui/form/inputs/phone/PhoneInput";
import RootInput from "@/components/ui/form/inputs/root/RootInput";
import RootTextarea from "@/components/ui/form/inputs/textarea/RootTextarea";
import RootRadioButton from "@/components/ui/form/radio-button/RootRadioButton";
import RootSelect from "@/components/ui/form/select/RootSelect";
import RootLink from "@/components/ui/links/root/RootLink";
import { useModal } from "@/context/modal/ModalProvider";
import { sendFormData } from "@/services/sendFormDataService";
import { valuesToFormData } from "@/utils/form/submitUtils";

import { formDefaultValues, formSchema, type FormSchemaType } from "./schema";
import s from "./TestForm.module.scss";

import FormWrapper from "../wrapper/FormWrapper";

const TestForm = () => {
	const methods = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: formDefaultValues,
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const { showSuccessModal, showErrorModal } = useModal();

	const onSubmit: SubmitHandler<FormSchemaType> = async (values) => {
		await sendFormData("test", valuesToFormData(values))
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
					<FormWrapper isLoading={isSubmitting} title="Тестовая форма">
						<RootInput name="name" placeholder="Имя" label="Имя" />
						<RootInput name="email" placeholder="Email" label="Email" />
						<PhoneInput name="phone" label="Телефон" />
						<RootInput
							name="password"
							placeholder="Пароль"
							label="Пароль"
							type="password"
						/>
						<RootTextarea name="text" placeholder="Текст" label="Текст" />
						<RootFileInput
							label="Файл с превью"
							name="file"
							fileSize="Максимальный размер файла - 5MB."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
							withPreview
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
							items={[
								{ value: "Первый чекбокс", label: "Первый чекбокс label" },
								{
									value: "Второй чекбокс",
									label: <h4>Второй чекбокс h4 element</h4>,
								},
								{ value: "Третий чекбокс", label: "Третий чекбокс" },
							]}
							label="Группа чекбоксов"
							chooseAllCheckbox="Выбрать всё"
						/>
						<RootCheckboxGroup
							name="checkbox-group2"
							items={[
								{ value: "Первый чекбокс", label: "Первый чекбокс label" },
								{
									value: "Второй чекбокс",
									label: <p>Второй чекбокс P element</p>,
								},
								{
									value: "Третий чекбокс",
									label: <RootLink href={"/"}>aaaaaaaaaaaaaaaaaaa</RootLink>,
								},
								{ value: "Четвертый", label: "Четвертый" },
								{ value: "Пятый", label: "Пятый" },
								{ value: "Шестой", label: "Шестой" },
							]}
							label="Группа чекбоксов 2"
						/>
						<RootRadioButton
							variant="horizontal"
							label="RadioButton"
							name="radio"
							items={[
								{
									value: "Да",
									label: "Да",
								},
								{
									value: "Нет",
									label: <h4>h4 нет</h4>,
								},
							]}
						/>
						<RootSelect
							label="Выбор"
							placeholder="Выбор"
							name="select"
							options={[
								{ value: "aaaaa", label: "aaaaa" },
								{ value: "bbb", label: "bbb" },
							]}
						/>
						<RootSelect
							label="Мульти выбор"
							placeholder="Мульти выбор"
							name="multi-select"
							isMulti
							options={[
								{ value: "aaaaa", label: "aaaaa" },
								{ value: "bbb", label: "bbb" },
								{ value: "ccc", label: "ccc" },
							]}
						/>
					</FormWrapper>
				</form>
			</FormProvider>
		</>
	);
};

export default TestForm;
