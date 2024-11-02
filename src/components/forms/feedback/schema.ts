import { z } from "zod";

import fields from "@/schemas/fields";
import { checkFileLength } from "@/schemas/fileInput";

const MAX_FILE_SIZE = 3000000;
function checkFileType(file: File) {
	if (file?.name) {
		const fileType = file.name.split(".").pop();
		if (fileType === "docx" || fileType === "pdf") return true;
	}
	return false;
}

export const feedbackSchema = z.object({
	name: fields.name,
	phone: fields.phone,
	email: fields.email,
	password: fields.password,
	text: fields.text,
	file: z
		.any()
		.refine((files: FileList) => checkFileLength(files), "Поле обязательно")
		.refine(
			(files: FileList) =>
				Array.from(files).reduce((sum, file) => sum + file.size, 0) <
				MAX_FILE_SIZE,
			"Max size is 5MB."
		),
	// .refine(
	// 	(file) => checkFileType(file),
	// 	"Only .pdf, .docx formats are supported."
	// ),
	files: z.any(),
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
