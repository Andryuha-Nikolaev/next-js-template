import { z } from "zod";

export const singleDateSchema = z.date().or(z.null()).or(z.string());

export const singleDateSchemaRequired = singleDateSchema.refine(
	(value) => !!value,
	"Поле обязательно"
);
