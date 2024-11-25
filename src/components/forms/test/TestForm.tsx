"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import RHFCheckboxGroup from "@/components/ui/fields/checkbox-group/RHFCheckboxGroup";
import RHFCheckbox from "@/components/ui/fields/checkbox/RHFCheckbox";
import RHFDatePicker from "@/components/ui/fields/date-picker/RHFDatePicker";
import RHFFileInput from "@/components/ui/fields/file/RHFFileInput";
import RHFInput from "@/components/ui/fields/input/RHFInput";
import RHFPhoneInput from "@/components/ui/fields/input/RHFPhoneInput";
import RHFRadioButton from "@/components/ui/fields/radio-button/RHFRadioButton";
import RHFSelect from "@/components/ui/fields/select/RHFSelect";
import RHFTextarea from "@/components/ui/fields/textarea/RHFTextarea";
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
						<RHFInput name="name" placeholder="Имя" label="Имя" />
						<RHFInput name="email" placeholder="Email" label="Email" />
						<RHFPhoneInput name="phone" label="Телефон" />
						<RHFInput
							name="password"
							placeholder="Пароль"
							label="Пароль"
							type="password"
						/>
						<RHFTextarea name="text" placeholder="Текст" label="Текст" />
						<RHFFileInput
							label="Файл с превью"
							name="file"
							fileSize="Максимальный размер файла - 5MB."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
							withPreview
						/>
						<RHFFileInput
							name="files"
							multiple
							label="Несколько файлов"
							buttonText="Прикрепить файлы"
							fileSize="Максимальный размер файлов - 10MB."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
						/>
						<RHFCheckbox name="policy">
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
						</RHFCheckbox>
						<RHFCheckboxGroup
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
						<RHFCheckboxGroup
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
						<RHFDatePicker
							label="Дата"
							mode="single"
							name="date"
							modalPosition="top"
						/>
						<RHFRadioButton
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
						<RHFSelect
							label="Выбор"
							placeholder="Выбор"
							name="select"
							options={[
								{ value: "aaaaa", label: "aaaaa" },
								{ value: "bbb", label: "bbb" },
							]}
						/>
						<RHFSelect
							label="Мульти выбор"
							placeholder="Мульти выбор"
							name="multi-select"
							isMulti
							options={[
								{ value: "aaaaa", label: "aaaaa" },
								{ value: "bbb", label: "bbb" },
								{ value: "ccc", label: "ccc" },
								{ value: "aaaaa4", label: "aaaaa4" },
								{ value: "bbb5", label: "bbb5" },
								{ value: "ccc6", label: "ccc6" },
								{ value: "aaaaa7", label: "aaaaa7" },
								{ value: "bbb8", label: "bbb8" },
								{ value: "ccc9", label: "ccc9" },
							]}
						/>
					</FormWrapper>
				</form>
			</FormProvider>
			<div style={{ height: 200 }}></div>
		</>
	);
};

export default TestForm;
