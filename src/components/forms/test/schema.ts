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
	selectSchema,
	singleDateSchemaRequired,
	textSchema,
} from "@/schemas/fields";
import {
	// checkFilesLength,
	checkFilesSize,
	checkFilesTypes,
} from "@/schemas/fileInput";

export const formSchema = z.object({
	name: nameSchema,
	phone: phoneSchema,
	email: emailSchema,
	password: passwordSchema,
	text: textSchema,
	file: z
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

	files: z
		.any()
		.refine(
			(files: FileList) => checkFilesSize(files, 10),
			"Максимальный размер файлов - 10MB"
		)
		.refine(
			(files: FileList) => checkFilesTypes(files),
			"Допустимые форматы: jpeg, jpg, png"
		),
	policy: checkboxSchema,
	"checkbox-group": checkboxGroupSchema,
	"checkbox-group2": checkboxGroupSchemaRequired,
	radio: radioButtonSchema,
	select: selectSchema,
	"multi-select": multiSelectSchemaRequired,
	date: singleDateSchemaRequired,
});

export type FormSchemaType = z.infer<typeof formSchema>;

export const formDefaultValues: FormSchemaType = {
	name: "",
	phone: "",
	email: "",
	password: "",
	text: "",
	file: "",
	files: "",
	policy: false,
	"checkbox-group": [],
	"checkbox-group2": ["Второй чекбокс", "Четвертый"],
	radio: "",
	select: null,
	"multi-select": [{ value: "ccc", label: "ccc" }],
	date: undefined,
};
