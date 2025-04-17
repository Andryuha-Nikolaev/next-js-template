import { z } from "zod";

export const checkboxSchema = z.boolean();

export const checkboxSchemaRequired = checkboxSchema.refine(
	(value) => value,
	"Поле обязательно"
);

export const checkboxGroupSchema = z.array(z.string());

export const checkboxGroupSchemaRequired = checkboxGroupSchema.refine(
	(value) => !!value.length,
	"Поле обязательно"
);
