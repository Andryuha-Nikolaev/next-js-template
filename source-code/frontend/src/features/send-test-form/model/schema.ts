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
	singleSliderSchema,
	textSchema,
} from "@/shared/schemas/fields";
import { adultDateSchemaRequired } from "@/shared/schemas/fields/dateSchema";
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
		[FieldNames.DATE]: adultDateSchemaRequired,
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
