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
	selectSchema,
	textSchema,
} from "@/schemas/fields";
import {
	// checkFilesLength,
	checkFilesSize,
	checkFilesTypes,
} from "@/schemas/fileInput";

export const formSchema = z.object({
	[FieldName.FIRST_NAME]: nameSchema,
	[FieldName.LAST_NAME]: nameSchema,
	[FieldName.PHONE]: phoneSchema,
	[FieldName.EMAIL]: emailSchema,
	[FieldName.PASSWORD]: passwordSchema,
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
	// date: singleDateSchemaRequired,
});

export type FormSchemaType = z.infer<typeof formSchema>;

export const defaultValues: FormSchemaType = {
	[FieldName.FIRST_NAME]: "",
	[FieldName.LAST_NAME]: "Николаев",
	[FieldName.PHONE]: "",
	[FieldName.EMAIL]: "",
	[FieldName.PASSWORD]: "",
	[FieldName.TEXT]: "",
	[FieldName.FILE]: "",
	[FieldName.FILES]: "",
	[FieldName.POLICY]: false,
	[FieldName.CHECKBOX_GROUP]: [],
	[FieldName.CHECKBOX_GROUP_2]: ["Второй чекбокс", "Четвертый"],
	[FieldName.RADIO]: "",
	[FieldName.SELECT]: null,
	[FieldName.MULTI_SELECT]: [{ value: "ccc", label: "ccc" }],
	// date: new Date(
	// 	"Mon Nov 25 2023 20:44:51 GMT+0300 (Москва, стандартное время)"
	// ),
};
