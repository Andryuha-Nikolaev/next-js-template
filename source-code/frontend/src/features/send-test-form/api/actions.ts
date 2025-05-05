"use server";

import { sendFormData } from "@/shared/api/services";
import { tryParseErrorCode } from "@/shared/lib/api/error";

export type TestFormResponse = { error: string } | undefined;

export async function sendTestForm(
	values: FormData
): Promise<TestFormResponse> {
	try {
		await sendFormData("test-form", values);
		return;
	} catch (error) {
		const errorCode = tryParseErrorCode(error);

		if (errorCode) {
			return {
				error: errorCode,
			};
		}

		return {
			error: "unknown",
		};
	}
}
