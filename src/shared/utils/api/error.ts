import axios from "axios";

import { errorResponseWithCodeSchema } from "@/shared/schemas/error";

export const tryParseErrorCode = (error: unknown) => {
	if (!axios.isAxiosError(error)) {
		return undefined;
	}

	const code = errorResponseWithCodeSchema.safeParse(error.response?.data);

	return code.data?.error;
};
