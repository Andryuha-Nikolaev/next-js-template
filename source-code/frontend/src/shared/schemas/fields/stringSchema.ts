import { z } from "zod";

export const stringSchema = z.string().trim();

export const stringSchemaRequired = z
	.string()
	.trim()
	.min(1, "Поле обязательно");
