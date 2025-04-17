import { z } from "zod";

import { stringSchemaRequired } from "./stringSchema";

import { validationRegex } from "../validationRegex";

export const passwordSchemaRequired = stringSchemaRequired
	.min(8, "Минимальная длина - 8 символов")
	.refine(
		(value) => validationRegex.PASSWORD_REGEX.test(value),
		"Пароль может включать латинские буквы, цифры, символы кроме пробела"
	);

export const passwordSchema = passwordSchemaRequired.or(z.literal(""));
