import { z } from "zod";

const fields = {
	name: z.string().trim().max(80, "Максимальная длина - 80 символов"),
	nameRequired: z
		.string()
		.trim()
		.min(1, "Поле обязательно")
		.max(80, "Максимальная длина - 80 символов"),
	phone: z.string().trim().min(18, "Введите номер полностью").or(z.literal("")),
	phoneRequired: z
		.string()
		.trim()
		.min(1, "Поле обязательно")
		.min(18, "Введите номер полностью"),
	email: z.string().trim().email("Некорректный email").or(z.literal("")),
	emailRequired: z
		.string()
		.trim()
		.min(1, "Поле обязательно")
		.email("Некорректный email"),
	password: z
		.string()
		.trim()
		.min(8, "Минимальная длина - 8 символов")
		.max(30, "Максимальная длина - 30 символов"),
	text: z.string().trim().max(1500, "Максимальная длина - 1500 символов"),
};

export default fields;
