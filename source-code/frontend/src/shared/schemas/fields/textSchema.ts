import { z } from "zod";

import { stringSchemaRequired } from "./stringSchema";

export const textSchemaRequired = stringSchemaRequired.max(
	1500,
	"Максимальная длина - 1500 символов"
);

export const textSchema = textSchemaRequired.or(z.literal(""));
