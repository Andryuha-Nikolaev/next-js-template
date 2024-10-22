import { validationMessages } from "./validation-messages";

const validationRegex = {
	EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	ONLY_SPACES: /\S/,
};

export const validationRules = {
	required: validationMessages.REQUIRED,

	minLength: (value: number) => {
		return {
			value: value,
			message: `${validationMessages.MIN_LENGTH}${value}`,
		};
	},

	maxLength: (value: number) => {
		return {
			value: value,
			message: `${validationMessages.MAX_LENGTH}${value}`,
		};
	},

	isEmail: (value: string) => {
		if (!validationRegex.EMAIL.test(value)) {
			return validationMessages.INVALID_FORMAT;
		}
		return true;
	},

	onlySpaces: (value: string) => {
		if (!validationRegex.ONLY_SPACES.test(value)) {
			return validationMessages.REQUIRED;
		}
		return true;
	},

	checkTotalSize: (value: FileList | File[] | null, maxSizeMb: number) => {
		if (!value || value.length === 0) {
			return true;
		}

		const maxSizeTotal = maxSizeMb * 1024 * 1024;
		const totalSize = Array.from(value).reduce(
			(sum, file) => sum + file.size,
			0
		);

		if (totalSize >= maxSizeTotal) {
			return `${validationMessages.FILE_SIZE}${maxSizeMb} МБ`;
		}

		return true;
	},

	checkFileTypes: (
		value: FileList | File[] | null,
		validTypes: string[] = [
			"image/jpeg",
			"image/png",
			"image/jpg",
			"application/pdf",
			"application/msword",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		]
	) => {
		// Проверить, что файлы существуют
		if (!value || value.length === 0) {
			return true; // Можно вернуть true, если отсутствие файлов это нормально
		}

		// Преобразовать FileList в массив
		const files = Array.from(value);

		// Допустимые MIME-типы

		for (const file of files) {
			if (!validTypes.includes(file.type)) {
				return validationMessages.INVALID_FORMAT;
			}
		}

		return true;
	},
};
