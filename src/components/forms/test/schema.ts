import { z } from "zod";

import {
	checkboxGroupSchema,
	checkboxGroupSchemaRequired,
	checkboxSchema,
	emailSchema,
	multiSelectSchemaRequired,
	nameSchema,
	passwordSchema,
	phoneSchema,
	radioButtonSchema,
	rangeSliderSchema,
	selectSchema,
	singleDateSchema,
	singleSliderSchema,
	textSchema,
} from "@/schemas/fields";
import {
	// checkFilesLength,
	checkFilesSize,
	checkFilesTypes,
} from "@/schemas/fileInput";
import { FieldNames } from "@/shared/constants/fields";

export const testFormSchema = z
	.object({
		[FieldNames.FIRST_NAME]: nameSchema,
		[FieldNames.LAST_NAME]: nameSchema,
		[FieldNames.PHONE]: phoneSchema,
		[FieldNames.EMAIL]: emailSchema,
		[FieldNames.PASSWORD]: passwordSchema,
		[FieldNames.CONFIRM_PASSWORD]: passwordSchema,
		[FieldNames.TEXT]: textSchema,
		[FieldNames.FILE]: z
			.any()
			// .refine((files: FileList) => checkFilesLength(files), "Поле обязательно")
			.refine(
				(files: FileList) => checkFilesSize(files, 5),
				"Максимальный размер файла - 5MB"
			)
			.refine(
				(files: FileList) => checkFilesTypes(files),
				"Допустимые форматы: jpeg, jpg, png"
			),

		[FieldNames.FILES]: z
			.any()
			.refine(
				(files: FileList) => checkFilesSize(files, 10),
				"Максимальный размер файлов - 10MB"
			)
			.refine(
				(files: FileList) => checkFilesTypes(files),
				"Допустимые форматы: jpeg, jpg, png"
			),
		[FieldNames.POLICY]: checkboxSchema,
		[FieldNames.CHECKBOX_GROUP]: checkboxGroupSchema,
		[FieldNames.CHECKBOX_GROUP_2]: checkboxGroupSchemaRequired,
		[FieldNames.RADIO]: radioButtonSchema,
		[FieldNames.SELECT]: selectSchema,
		[FieldNames.MULTI_SELECT]: multiSelectSchemaRequired,
		[FieldNames.DATE]: singleDateSchema,
		[FieldNames.START_DATE]: singleDateSchema,
		[FieldNames.END_DATE]: singleDateSchema,
		[FieldNames.SINGLE_SLIDER]: singleSliderSchema,
		[FieldNames.RANGE_SLIDER]: rangeSliderSchema,
	})
	.refine(
		(data) => data[FieldNames.PASSWORD] === data[FieldNames.CONFIRM_PASSWORD],
		{
			message: "Пароли не совпадают",
			path: [FieldNames.CONFIRM_PASSWORD],
		}
	);

export type TestFormSchemaType = z.infer<typeof testFormSchema>;

export const defaultValues: TestFormSchemaType = {
	[FieldNames.FIRST_NAME]: "",
	[FieldNames.LAST_NAME]: "Николаев",
	[FieldNames.PHONE]: "",
	[FieldNames.EMAIL]: "",
	[FieldNames.PASSWORD]: "",
	[FieldNames.CONFIRM_PASSWORD]: "",
	[FieldNames.TEXT]: "",
	[FieldNames.FILE]: "",
	[FieldNames.FILES]: "",
	[FieldNames.POLICY]: false,
	[FieldNames.CHECKBOX_GROUP]: [],
	[FieldNames.CHECKBOX_GROUP_2]: ["Второй чекбокс", "Четвертый"],
	[FieldNames.RADIO]: "",
	[FieldNames.SELECT]: null,
	[FieldNames.MULTI_SELECT]: [{ value: "ccc", label: "ccc" }],
	[FieldNames.DATE]: null,
	[FieldNames.START_DATE]: null,
	[FieldNames.END_DATE]: null,
	[FieldNames.SINGLE_SLIDER]: "49",
	[FieldNames.RANGE_SLIDER]: [0, 1000000000],
};
