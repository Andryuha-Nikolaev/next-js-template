import { z } from "zod";

export const radioButtonSchema = z.string();

export const radioButtonSchemaRequired = radioButtonSchema.min(
	1,
	"Поле обязательно"
);
