import { z } from "zod";

import { FieldNames } from "@/shared/constants/fields";
import {
	checkboxGroupSchema,
	checkboxGroupSchemaRequired,
	checkboxSchema,
	emailSchema,
	multiSelectSchemaRequired,
	nameSchema,
	passwordSchema,
	phoneSchemaRequired,
	radioButtonSchema,
	rangeSliderSchema,
	selectSchema,
	singleDateSchema,
	singleDateSchemaRequired,
	singleSliderSchema,
	textSchema,
} from "@/shared/schemas/fields";
import {
	checkFilesLength,
	checkFilesSize,
	checkFilesTypes,
} from "@/shared/schemas/fields/fileInputSchema";

export const testFormSchema = z
	.object({
		[FieldNames.FIRST_NAME]: nameSchema,
		[FieldNames.LAST_NAME]: nameSchema,
		[FieldNames.PHONE]: phoneSchemaRequired,
		[FieldNames.EMAIL]: emailSchema,
		[FieldNames.PASSWORD]: passwordSchema,
		[FieldNames.CONFIRM_PASSWORD]: passwordSchema,
		[FieldNames.TEXT]: textSchema,
		[FieldNames.FILE]: z
			.custom<FileList | string[]>()
			.refine((files) => checkFilesLength(files), "Поле обязательно")
			.refine(
				(files) => checkFilesSize(files, 5),
				"Максимальный размер файла - 5 МБ"
			)
			.refine(
				(files) => checkFilesTypes(files),
				"Допустимые форматы: jpeg, jpg, png"
			),

		[FieldNames.FILES]: z
			.custom<FileList | string[]>()
			// .refine((files) => checkFilesLength(files), "Поле обязательно")
			.refine(
				(files) => checkFilesSize(files, 10),
				"Максимальный размер файлов - 10 МБ"
			)
			.refine(
				(files) => checkFilesTypes(files),
				"Допустимые форматы: jpeg, jpg, png"
			),
		[FieldNames.POLICY]: checkboxSchema,
		[FieldNames.CHECKBOX_GROUP]: checkboxGroupSchema,
		[FieldNames.CHECKBOX_GROUP_2]: checkboxGroupSchemaRequired,
		[FieldNames.RADIO]: radioButtonSchema,
		[FieldNames.SELECT]: selectSchema,
		[FieldNames.MULTI_SELECT]: multiSelectSchemaRequired,
		[FieldNames.DATE]: singleDateSchemaRequired,
		[FieldNames.START_DATE]: singleDateSchema,
		[FieldNames.END_DATE]: singleDateSchema,
		[FieldNames.SINGLE_SLIDER]: singleSliderSchema,
		[FieldNames.RANGE_SLIDER]: rangeSliderSchema,
	})
	.refine(
		(data) => data[FieldNames.PASSWORD] === data[FieldNames.CONFIRM_PASSWORD],
		{
			message: "Пароли не совпадают",
			path: [FieldNames.CONFIRM_PASSWORD],
		}
	);

export type TestFormSchemaType = z.infer<typeof testFormSchema>;

export const defaultValues: TestFormSchemaType = {
	[FieldNames.FIRST_NAME]: "Андрей",
	[FieldNames.LAST_NAME]: "Николаев",
	[FieldNames.PHONE]: "",
	[FieldNames.EMAIL]: "",
	[FieldNames.PASSWORD]: "",
	[FieldNames.CONFIRM_PASSWORD]: "",
	[FieldNames.TEXT]: "",
	[FieldNames.FILE]: [
		"https://sun9-24.userapi.com/impg/IQarFPbKsXvsWcmoOQmWgGFcYxfuJ5NxBZvQ4g/uQrgpUHfO_M.jpg?quality=96&as=32x19,48x29,72x44,108x66,160x97,240x146,360x218,480x291,540x328,640x388,720x437,1080x655,1280x777,1440x874,2048x1243&sign=8704395db376b4bfb93a4e5fecea35a3&from=bu&u=1J4JgmOFQ9C7CvySZbZMVX0ACy84z3vsYBj8_-FiAK0&cs=807x490",
	],
	[FieldNames.FILES]: [
		"https://s.yimg.com/ny/api/res/1.2/ODgxctJpSAUV86z5i6vq_g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY4Ng--/https://media.zenfs.com/en/business_insider_articles_888/e00204cd3c0bc62524368c532e0bfdd2",
	],
	[FieldNames.POLICY]: true,
	[FieldNames.CHECKBOX_GROUP]: [],
	[FieldNames.CHECKBOX_GROUP_2]: ["Второй чекбокс", "Четвертый"],
	[FieldNames.RADIO]: "",
	[FieldNames.SELECT]: null,
	[FieldNames.MULTI_SELECT]: [{ value: "ccc", label: "ccc" }],
	[FieldNames.DATE]: null,
	[FieldNames.START_DATE]: null,
	[FieldNames.END_DATE]: null,
	[FieldNames.SINGLE_SLIDER]: "49",
	[FieldNames.RANGE_SLIDER]: [0, 1000000000],
};
