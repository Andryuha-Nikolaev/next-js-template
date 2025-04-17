import { z } from "zod";

import { stringSchemaRequired } from "./stringSchema";

import { validationRegex } from "../validationRegex";

export const nameSchemaRequired = stringSchemaRequired
	.min(2, "Минимальная длина - 2 символа")
	.max(25, "Максимальная длина - 25 символов")
	.refine(
		(value) => validationRegex.ONLY_CYRILLIC.test(value),
		"Введите данные на русском языке"
	);

export const nameSchema = nameSchemaRequired.or(z.literal(""));
