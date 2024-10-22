import { FieldValues, RegisterOptions } from "react-hook-form";

import { validationRules } from "@/constants/validation-rules";

export enum FIELDS {
	NAME = "name",
	EMAIL = "email",
	THEME = "theme",
	TEXT = "text",
	FILE = "file",
}

export const PLACEHOLDERS = {
	[FIELDS.NAME]: "Имя",
	[FIELDS.EMAIL]: "Email",
	[FIELDS.THEME]: "Выберите тему обращения",
	[FIELDS.TEXT]: "Текст обращения",
};

export const SELECT_ITEMS = [
	{ value: "Тема 1", label: "Тема 1" },
	{ value: "Тема 2", label: "Тема 2" },
	{ value: "Тема 3", label: "Тема 3" },
];

export const RULES: Record<string, RegisterOptions<FieldValues>> = {
	[FIELDS.NAME]: {
		required: validationRules.required,
		maxLength: validationRules.maxLength(80),
		validate: {
			onlySpaces: (value) => validationRules.onlySpaces(value),
		},
	},
	[FIELDS.EMAIL]: {
		required: validationRules.required,
		validate: {
			isEmail: (value) => validationRules.isEmail(value),
		},
	},
	[FIELDS.THEME]: {
		required: validationRules.required,
	},
	[FIELDS.TEXT]: {
		required: validationRules.required,
		maxLength: validationRules.maxLength(1500),
	},
	[FIELDS.FILE]: {
		validate: {
			maxSize: (value) => validationRules.checkTotalSize(value, 100),
		},
	},
};

export interface IFeedbackForm {
	[FIELDS.NAME]: string;
	[FIELDS.EMAIL]: string;
	[FIELDS.THEME]: string;
	[FIELDS.TEXT]: string;
	[FIELDS.FILE]: FileList;
}
