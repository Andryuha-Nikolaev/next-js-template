import { z } from "zod";

import { stringSchemaRequired } from "./stringSchema";

export const phoneSchemaRequired = stringSchemaRequired
	.min(18, "Введите номер полностью")
	.transform((str) => str.replace(/\D/g, ""));

export const phoneSchema = phoneSchemaRequired.or(z.literal(""));
