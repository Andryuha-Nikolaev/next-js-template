"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import RHFCheckboxGroup from "@/components/ui/fields/checkbox-group/RHFCheckboxGroup";
import RHFCheckbox from "@/components/ui/fields/checkbox/RHFCheckbox";
import RHFRangeDatePicker from "@/components/ui/fields/date-picker/components/rhf-range-date-picker/RHFRangeDatePicker";
import RHFDatePicker from "@/components/ui/fields/date-picker/RHFDatePicker";
import RHFFileInput from "@/components/ui/fields/file/RHFFileInput";
import RHFInput from "@/components/ui/fields/input/RHFInput";
import RHFPhoneInput from "@/components/ui/fields/input/RHFPhoneInput";
import RHFRadioButton from "@/components/ui/fields/radio-button/RHFRadioButton";
import RHFSelect from "@/components/ui/fields/select/RHFSelect";
import RHFTextarea from "@/components/ui/fields/textarea/RHFTextarea";
import RootLink from "@/components/ui/links/root/RootLink";
import { FieldName } from "@/constants/fields";
import { useModal } from "@/context/modal/ModalProvider";
import { sendFormData } from "@/services/sendFormDataService";
import { valuesToFormData } from "@/utils/form/submitUtils";

import PasswordFields from "./components/password-fields/PasswordFields";
import { defaultValues, formSchema, type FormSchemaType } from "./schema";
import s from "./TestForm.module.scss";

import FormWrapper from "../wrapper/FormWrapper";

const TestForm = () => {
	const methods = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues,
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
						<RHFInput
							name={FieldName.FIRST_NAME}
							placeholder="Имя"
							label="Имя"
						/>
						<RHFInput
							disabled
							name={FieldName.LAST_NAME}
							placeholder="Фамилия"
							label="Фамилия disabled"
						/>
						<RHFPhoneInput name={FieldName.PHONE} label="Телефон" />
						<RHFInput
							name={FieldName.EMAIL}
							placeholder="Email"
							label="Email"
						/>
						<PasswordFields />
						<RHFTextarea
							name={FieldName.TEXT}
							placeholder="Текст"
							label="Текст"
						/>
						<RHFFileInput
							disabled
							label="Файл с превью"
							name={FieldName.FILE}
							fileSize="Максимальный размер файла - 5MB."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
							withPreview
						/>
						<RHFFileInput
							name={FieldName.FILES}
							multiple
							label="Несколько файлов"
							buttonText="Прикрепить файлы"
							fileSize="Максимальный размер файлов - 10MB."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
						/>
						<RHFCheckbox disabled name={FieldName.POLICY}>
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
							name={FieldName.CHECKBOX_GROUP}
							items={[
								{
									value: "Первый чекбокс",
									label: "Первый чекбокс label",
									disabled: true,
								},
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
							name={FieldName.CHECKBOX_GROUP_2}
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

						<RHFRadioButton
							variant="horizontal"
							label="RadioButton"
							name={FieldName.RADIO}
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
							isDisabled
							label="Выбор"
							placeholder="Выбор"
							name={FieldName.SELECT}
							options={[
								{ value: "aaaaa", label: "aaaaa" },
								{ value: "bbb", label: "bbb" },
							]}
						/>
						<RHFSelect
							label="Мульти выбор"
							placeholder="Мульти выбор"
							name={FieldName.MULTI_SELECT}
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
						<RHFDatePicker label="Просто дата" name={FieldName.DATE} />
						<RHFRangeDatePicker
							startDateName={FieldName.START_DATE}
							endDateName={FieldName.END_DATE}
							time
						/>
					</FormWrapper>
				</form>
			</FormProvider>
			<div style={{ height: 207 }}></div>
		</>
	);
};

export default TestForm;
