import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDate = (
	date: string,
	dateFormat: "dd.MM.yyyy" | "d MMMM, yyyy"
) => {
	return format(new Date(date), dateFormat, {
		locale: ru,
	});
};
