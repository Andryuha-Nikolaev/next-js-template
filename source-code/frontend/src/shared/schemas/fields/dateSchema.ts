import { addYears, formatDate, isValid, parseISO, startOfDay } from "date-fns";
import { z } from "zod";

export const singleDateSchema = z.date().or(z.null()).or(z.string());

export const singleDateSchemaRequired = singleDateSchema.refine(
	(value) => !!value,
	"Поле обязательно"
);

export const adultDateSchema = singleDateSchema.refine(
	(value) => {
		if (!value) {
			return true;
		}

		const date = typeof value === "string" ? parseISO(value) : value;

		if (!isValid(date)) {
			return false;
		}

		const maxDate = addYears(startOfDay(new Date()), -18);
		return date < maxDate;
	},
	{
		message: `Дата должна быть раньше ${formatDate(addYears(new Date(), -18), "dd.MM.yyyy")}`,
	}
);

export const adultDateSchemaRequired = adultDateSchema.refine(
	(value) => !!value,
	"Поле обязательно"
);
