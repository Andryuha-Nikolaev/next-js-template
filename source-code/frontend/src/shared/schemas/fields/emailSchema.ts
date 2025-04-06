import { z } from "zod";

import { stringSchemaRequired } from "./stringSchema";

export const emailSchemaRequired =
	stringSchemaRequired.email("Некорректный email");

export const emailSchema = emailSchemaRequired.or(z.literal(""));
