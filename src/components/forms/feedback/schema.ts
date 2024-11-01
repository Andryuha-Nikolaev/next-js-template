import { z } from "zod";

import fields from "@/schemas/fields";

export const feedbackSchema = z.object({
	name: fields.name,
	phone: fields.phone,
	email: fields.emailRequired,
	password: fields.password,
	text: fields.text,
});

export const feedbackDefaultValues = {
	name: "",
	phone: "",
	email: "",
	password: "",
	text: "",
};

export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;
