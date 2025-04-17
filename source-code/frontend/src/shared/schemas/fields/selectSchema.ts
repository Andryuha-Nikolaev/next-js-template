import { z } from "zod";

export const selectSchema = z
	.object({ value: z.string(), label: z.string() })
	.transform((value) => value?.value)
	.or(z.null());

export const selectSchemaRequired = selectSchema.refine(
	(value) => !!value,
	"Поле обязательно"
);

export const multiSelectSchema = z
	.array(z.object({ value: z.string(), label: z.string() }))
	.transform((value) => value.map((item) => item.value))
	.or(z.array(z.object({ value: z.string(), label: z.string() })));

export const multiSelectSchemaRequired = multiSelectSchema.refine(
	(value) => !!value.length,
	"Поле обязательно"
);
