import { z } from "zod";

import fields from "@/schemas/fields";
import {
	// checkFilesLength,
	checkFilesSize,
	checkFilesTypes,
} from "@/schemas/fileInput";

export const formSchema = z.object({
	name: fields.name,
	phone: fields.phone,
	email: fields.email,
	password: fields.password,
	text: fields.text,
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
	policy: fields.checkbox,
	"checkbox-group": fields.checkboxGroup,
	"checkbox-group2": fields.checkboxGroup,
	radio: fields.radioButtonRequired,
	select: z
		.object({ value: z.string(), label: z.string() })

		.transform((value) => value?.value)
		// .or(z.string())
		.or(z.null())
		.refine((value) => !!value, "Поле обязательно"),
	// .or(z.array(z.object({ value: z.string(), label: z.string() })))
	// .or(z.null()),
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
};
