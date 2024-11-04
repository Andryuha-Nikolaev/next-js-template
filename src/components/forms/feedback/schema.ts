import { z } from "zod";

import fields from "@/schemas/fields";
import {
	checkFilesLength,
	checkFilesSize,
	checkFilesTypes,
} from "@/schemas/fileInput";

export const feedbackSchema = z.object({
	name: fields.name,
	phone: fields.phone,
	email: fields.email,
	password: fields.passwordRequired,
	text: fields.text,
	file: z
		.any()
		.refine((files: FileList) => checkFilesLength(files), "Поле обязательно")
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
});

export const feedbackDefaultValues = {
	name: "",
	phone: "",
	email: "",
	password: "",
	text: "",
	file: "",
	files: "",
};

export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;
