import { z } from "zod";

export const singleSliderSchema = z
	.number()
	.or(z.string())
	.transform((value) => value.toString());

export const rangeSliderSchema = z.array(z.number());
