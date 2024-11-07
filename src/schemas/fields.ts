import { z } from "zod";

const fields = {
	name: z.string().trim().max(80, "Максимальная длина - 80 символов"),
	nameRequired: z
		.string()
		.trim()
		.min(1, "Поле обязательно")
		.max(80, "Максимальная длина - 80 символов"),
	phone: z
		.string()
		.trim()
		.min(18, "Введите номер полностью")
		.or(z.literal(""))
		.transform((str) => str.replace(/[ ()]/g, "")),
	phoneRequired: z
		.string()
		.trim()
		.min(1, "Поле обязательно")
		.min(18, "Введите номер полностью")
		.transform((str) => str.replace(/[ ()]/g, "")),
	email: z.string().trim().email("Некорректный email").or(z.literal("")),
	emailRequired: z
		.string()
		.trim()
		.min(1, "Поле обязательно")
		.email("Некорректный email"),
	password: z
		.string()
		.trim()
		.max(30, "Максимальная длина - 30 символов")
		.min(8, "Минимальная длина - 8 символов")
		.or(z.literal("")),

	passwordRequired: z
		.string()
		.trim()
		.min(1, "Поле обязательно")
		.min(8, "Минимальная длина - 8 символов")
		.max(30, "Максимальная длина - 30 символов"),
	text: z.string().trim().max(1500, "Максимальная длина - 1500 символов"),
	checkbox: z.boolean(),
	checkboxRequired: z.boolean().refine((value) => value, "Поле обязательно"),
	checkboxGroup: z.array(z.string()),
	checkboxGroupRequired: z
		.array(z.string())
		.refine((value) => !!value.length, "Поле обязательно"),
	radioButton: z.string(),
	radioButtonRequired: z.string().min(1, "Поле обязательно"),
	select: z
		.object({ value: z.string(), label: z.string() })
		.transform((value) => value?.value)
		.or(z.null()),
	selectRequired: z
		.object({ value: z.string(), label: z.string() })
		.transform((value) => value?.value)
		.or(z.null())
		.refine((value) => !!value, "Поле обязательно"),
	multiSelect: z
		.array(z.object({ value: z.string(), label: z.string() }))
		.transform((value) => value.map((item) => item.value))
		.or(z.array(z.object({ value: z.string(), label: z.string() }))),
	multiRequired: z
		.array(z.object({ value: z.string(), label: z.string() }))
		.transform((value) => value.map((item) => item.value))
		.or(z.array(z.object({ value: z.string(), label: z.string() })))
		.refine((value) => !!value.length, "Поле обязательно"),
};

export default fields;
