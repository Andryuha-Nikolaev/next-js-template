"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import { FieldNames } from "$shared/constants/fields";
import useShowError from "$shared/hooks/form/useShowError";
import { valuesToFormData } from "$shared/lib/form/submitUtils";
import { RHFAutocompleteInput } from "$shared/ui/fields/autocomplete-input";
import { RHFCheckbox } from "$shared/ui/fields/checkbox";
import { RHFCheckboxGroup } from "$shared/ui/fields/checkbox-group";
import { RHFDatePicker } from "$shared/ui/fields/date-picker";
import { RHFEmailInput } from "$shared/ui/fields/email-input";
import { RHFFileInput } from "$shared/ui/fields/file";
import { RHFInput } from "$shared/ui/fields/input";
import { RHFPhoneInput } from "$shared/ui/fields/phone-input";
import { RHFRadioButton } from "$shared/ui/fields/radio-button";
import { RHFRangeDatePicker } from "$shared/ui/fields/range-date-picker";
import { RHFSelect } from "$shared/ui/fields/select";
import { RHFRangeSliderField, RHFSliderField } from "$shared/ui/fields/slider";
import { RHFTextarea } from "$shared/ui/fields/textarea";
import { FormWrapper } from "$shared/ui/form/form-wrapper";
import { RootLink } from "$shared/ui/links/root";

import PasswordFields from "./password-fields/PasswordFields";

import { sendTestForm } from "../api/actions";
import { testFormDefaultValues } from "../model/default-values";
import { testFormSchema, type TestFormSchemaType } from "../model/schema";

export const TestForm = () => {
	const methods = useForm<TestFormSchemaType>({
		resolver: zodResolver(testFormSchema),
		defaultValues: testFormDefaultValues,
	});

	const {
		handleSubmit,
		reset,
		setError,
		formState: { isSubmitting },
	} = methods;

	const { showError } = useShowError();

	const onSubmit: SubmitHandler<TestFormSchemaType> = async (values) => {
		const response = await sendTestForm(valuesToFormData(values));

		showError<TestFormSchemaType>({ error: response?.error, setError });

		if (!response) {
			reset();
		}
	};

	return (
		<>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormWrapper isLoading={isSubmitting} title="Тестовая форма">
						<RHFInput
							name={FieldNames.FIRST_NAME}
							placeholder="Имя"
							label="Имя"
						/>
						<RHFInput
							disabled
							name={FieldNames.LAST_NAME}
							placeholder="Фамилия"
							label="Фамилия disabled"
						/>
						<RHFPhoneInput name={FieldNames.PHONE} isRequired />
						<RHFEmailInput name={FieldNames.EMAIL} />
						<PasswordFields />
						<RHFTextarea
							name={FieldNames.TEXT}
							placeholder="Текст"
							label="Текст"
						/>
						<RHFFileInput
							label="Файл с превью"
							name={FieldNames.FILE}
							fileSize="Максимальный размер файла - 5 МБ."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
							accept=".jpeg, .jpg, .png"
							withPreview
							isRequired
						/>
						<RHFFileInput
							name={FieldNames.FILES}
							multiple
							label="Несколько файлов"
							buttonText="Прикрепить файлы"
							fileSize="Максимальный размер файлов - 10 МБ."
							fileFormat="Допустимые форматы: jpeg, jpg, png."
							accept=".jpeg, .jpg, .png"
							withPreview
						/>
						<RHFCheckbox label="Согласие" name={FieldNames.POLICY}>
							<span>
								Я&nbsp;ознакомлен(а) с&nbsp;
								<a href="/policy.pdf" rel="noreferrer" target="_blank">
									Политикой конфиденциальности
								</a>
							</span>
						</RHFCheckbox>
						<RHFCheckboxGroup
							name={FieldNames.CHECKBOX_GROUP}
							items={[
								{
									value: "Первый чекбокс",
									label: "Первый чекбокс label",
									disabled: true,
								},
								{
									value: "Второй чекбокс",
									label: (
										<span style={{ fontSize: 18 }}>
											Второй чекбокс span 18px
										</span>
									),
								},
								{ value: "Третий чекбокс", label: "Третий чекбокс" },
							]}
							label="Группа чекбоксов"
							chooseAllCheckbox="Выбрать всё"
						/>
						<RHFCheckboxGroup
							isRequired
							name={FieldNames.CHECKBOX_GROUP_2}
							items={[
								{ value: "Первый чекбокс", label: "Первый чекбокс label" },
								{
									value: "Второй чекбокс",
									label: "Второй чекбокс",
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
							name={FieldNames.RADIO}
							items={[
								{
									value: "Да",
									label: "Да",
								},
								{
									value: "Нет",
									label: <span>span нет</span>,
								},
							]}
						/>
						<RHFSelect
							label="Select"
							placeholder="Select"
							name={FieldNames.SELECT}
							options={[
								{ value: "aaaaaа", label: "aaaaa" },
								{ value: "bbb", label: "bbb" },
							]}
						/>
						<RHFSelect
							isRequired
							label="Мульти выбор"
							placeholder="Мульти выбор"
							name={FieldNames.MULTI_SELECT}
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
						<RHFDatePicker
							label="Дата рождения"
							name={FieldNames.DATE}
							isRequired
						/>
						<RHFRangeDatePicker
							startDateName={FieldNames.START_DATE}
							endDateName={FieldNames.END_DATE}
							time
						/>
						<RHFSliderField
							disabled
							label="Single slider"
							name={FieldNames.SINGLE_SLIDER}
						/>
						<RHFRangeSliderField
							label="Range slider"
							name={FieldNames.RANGE_SLIDER}
							max={1000000000}
						/>
						<RHFAutocompleteInput
							label="Autocomplete input (введите тест)"
							name={FieldNames.AUTOCOMPLETE_INPUT}
							autoCompleteProps={{
								items: [
									"первое",
									"второе",
									"тест",
									"Тест 2",
									"Тест 3",
									"тест-4",
									"Тест тест тест тест тест тест 5",
									"тест-6",
									"тест-7",
									"тест-8",
									"тест-9",
									"тест-10",
									"тест-11",
									"тест-12",
								],
							}}
						/>
					</FormWrapper>
				</form>
			</FormProvider>
		</>
	);
};
