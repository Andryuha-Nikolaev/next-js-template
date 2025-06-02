import { z } from "zod";

export const errorResponseWithMessageSchema = z.object({
	error: z.string(),
});

export const validationErrorResponseSchema = z.object({
	errors: z.record(z.string(), z.array(z.string())),
});
