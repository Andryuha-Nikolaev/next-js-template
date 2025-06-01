"use server";

import { sendFormData } from "@/shared/api/services";
import { handleError, type HandleErrorResponse } from "@/shared/lib/api/error";

export type TestFormResponse = { error?: HandleErrorResponse } | undefined;

export async function sendTestForm(
	values: FormData
): Promise<TestFormResponse> {
	try {
		await sendFormData("test-form", values);
		return;
	} catch (error) {
		return { error: handleError(error) };
	}
}
