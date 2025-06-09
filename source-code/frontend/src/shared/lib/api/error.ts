import { isAxiosError } from "axios";

import { ErrorMessages } from "$shared/constants/errorMessages";
import { ErrorTypes } from "$shared/constants/errorTypes";
import {
	errorResponseWithMessageSchema,
	validationErrorResponseSchema,
} from "$shared/schemas/error";

export type HandleErrorResponse =
	| { errorType: ErrorTypes.MESSAGE; message: string }
	| {
			errorType: ErrorTypes.VALIDATION;
			fields: Record<string, string[]>;
			message: string;
	  };

export const handleError = (
	error: unknown,
	unknownErrorMessage: string = ErrorMessages.UNKNOWN
): HandleErrorResponse => {
	let message = unknownErrorMessage;

	if (isAxiosError(error)) {
		const errorMessage = errorResponseWithMessageSchema.safeParse(
			error.response?.data
		).data?.error;

		if (errorMessage) {
			message = errorMessage;
		}

		if (error.response?.status === 422) {
			const validationError = validationErrorResponseSchema.safeParse(
				error.response?.data
			);

			if (validationError.success) {
				return {
					errorType: ErrorTypes.VALIDATION,
					fields: validationError.data.errors,
					message: message,
				};
			}
		}
	}

	return {
		errorType: ErrorTypes.MESSAGE,
		message: message,
	};
};
