import { z } from "zod";

import { FieldName } from "@/constants/fields";
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

export const formSchema = z
	.object({
		[FieldName.FIRST_NAME]: nameSchema,
		[FieldName.LAST_NAME]: nameSchema,
		[FieldName.PHONE]: phoneSchema,
		[FieldName.EMAIL]: emailSchema,
		[FieldName.PASSWORD]: passwordSchema,
		[FieldName.CONFIRM_PASSWORD]: passwordSchema,
		[FieldName.TEXT]: textSchema,
		[FieldName.FILE]: z
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

		[FieldName.FILES]: z
			.any()
			.refine(
				(files: FileList) => checkFilesSize(files, 10),
				"Максимальный размер файлов - 10MB"
			)
			.refine(
				(files: FileList) => checkFilesTypes(files),
				"Допустимые форматы: jpeg, jpg, png"
			),
		[FieldName.POLICY]: checkboxSchema,
		[FieldName.CHECKBOX_GROUP]: checkboxGroupSchema,
		[FieldName.CHECKBOX_GROUP_2]: checkboxGroupSchemaRequired,
		[FieldName.RADIO]: radioButtonSchema,
		[FieldName.SELECT]: selectSchema,
		[FieldName.MULTI_SELECT]: multiSelectSchemaRequired,
		[FieldName.DATE]: singleDateSchema,
		[FieldName.START_DATE]: singleDateSchema,
		[FieldName.END_DATE]: singleDateSchema,
		[FieldName.SINGLE_SLIDER]: singleSliderSchema,
		[FieldName.RANGE_SLIDER]: rangeSliderSchema,
	})
	.refine(
		(data) => data[FieldName.PASSWORD] === data[FieldName.CONFIRM_PASSWORD],
		{
			message: "Пароли не совпадают",
			path: [FieldName.CONFIRM_PASSWORD],
		}
	);

export type FormSchemaType = z.infer<typeof formSchema>;

export const defaultValues: FormSchemaType = {
	[FieldName.FIRST_NAME]: "",
	[FieldName.LAST_NAME]: "Николаев",
	[FieldName.PHONE]: "",
	[FieldName.EMAIL]: "",
	[FieldName.PASSWORD]: "",
	[FieldName.CONFIRM_PASSWORD]: "",
	[FieldName.TEXT]: "",
	[FieldName.FILE]: "",
	[FieldName.FILES]: "",
	[FieldName.POLICY]: false,
	[FieldName.CHECKBOX_GROUP]: [],
	[FieldName.CHECKBOX_GROUP_2]: ["Второй чекбокс", "Четвертый"],
	[FieldName.RADIO]: "",
	[FieldName.SELECT]: null,
	[FieldName.MULTI_SELECT]: [{ value: "ccc", label: "ccc" }],
	[FieldName.DATE]: null,
	[FieldName.START_DATE]: null,
	[FieldName.END_DATE]: null,
	[FieldName.SINGLE_SLIDER]: "49",
	[FieldName.RANGE_SLIDER]: [0, 1000000000],
};
