import { z } from "zod";

import fields from "@/schemas/fields";

const MAX_FILE_SIZE = 5000000;
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
	email: fields.emailRequired,
	password: fields.password,
	text: fields.text,
	file: z.any().refine((file: File) => file?.length !== 0, "File is required"),
	// .refine((file: File) => file.size > MAX_FILE_SIZE, "Max size is 5MB.")
	// .refine(
	// 	(file) => checkFileType(file),
	// 	"Only .pdf, .docx formats are supported."
	// ),
});

export const feedbackDefaultValues = {
	name: "",
	phone: "",
	email: "",
	password: "",
	text: "",
	file: "",
};

export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;
