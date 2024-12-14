import { z } from "zod";

const validationRegex = {
	ONLY_CYRILLIC: /^[а-яА-ЯёЁ\s-]+$/,
	CYRILLIC_MARKS_DIGITS: /^[а-яА-ЯёЁ0-9\s.,:/;()"'№#&-]+$/,
	PASSWORD_REGEX: /^[a-zA-Z0-9.,!?:/;()"'№#&@$%^*_=+-]+$/,
};

export const nameSchemaRequired = z
	.string()
	.trim()
	.min(1, "Поле обязательно")
	.min(2, "Минимальная длина - 2 символа")
	.max(25, "Максимальная длина - 25 символов")
	.refine(
		(value) => validationRegex.ONLY_CYRILLIC.test(value),
		"Введите данные на русском языке"
	);

export const nameSchema = nameSchemaRequired.or(z.literal(""));

export const phoneSchemaRequired = z
	.string()
	.trim()
	.min(1, "Поле обязательно")
	.min(18, "Введите номер полностью")
	.transform((str) => str.replace(/\D/g, ""));

export const phoneSchema = phoneSchemaRequired.or(z.literal(""));

export const emailSchemaRequired = z
	.string()
	.trim()
	.min(1, "Поле обязательно")
	.email("Некорректный email");

export const emailSchema = emailSchemaRequired.or(z.literal(""));

export const passwordSchemaRequired = z
	.string()
	.trim()
	.min(1, "Поле обязательно")
	.min(8, "Минимальная длина - 8 символов")
	.refine(
		(value) => validationRegex.PASSWORD_REGEX.test(value),
		"Пароль может включать латинские буквы, цифры, символы кроме пробела"
	);

export const passwordSchema = passwordSchemaRequired.or(z.literal(""));

export const textSchemaRequired = z
	.string()
	.trim()
	.min(1, "Поле обязательно")
	.max(1500, "Максимальная длина - 1500 символов");

export const textSchema = textSchemaRequired.or(z.literal(""));

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

export const radioButtonSchema = z.string();

export const radioButtonSchemaRequired = radioButtonSchema.min(
	1,
	"Поле обязательно"
);

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

export const singleDateSchema = z.date().or(z.null()).or(z.string());

export const singleDateSchemaRequired = singleDateSchema.refine(
	(value) => !!value,
	"Поле обязательно"
);

export const rangeDateSchema = z
	.array(z.date().or(z.null()))
	.transform((arr) => {
		if (arr[0] === null || arr[1] === null) {
			return [];
		}
		return arr;
	});

export const rangeDateSchemaRequired = rangeDateSchema.refine(
	(arr) => !!arr.length,
	"Поле обязательно"
);
