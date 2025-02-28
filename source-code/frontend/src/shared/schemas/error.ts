import { z } from "zod";

export const errorResponseWithCodeSchema = z.object({
	error: z.string(),
});

export const validationErrorResponseSchema = z.object({
	error: z.literal("BAD_REQUEST"),
	payload: z.object({
		errorField: z.array(z.record(z.string())),
	}),
});
