import { apiFlow, createApi } from "@/shared/api/flow";

export const sendFormData = (url: string, data: FormData) => {
	const api = createApi(apiFlow.cookies);

	return api.post(url, data, {
		headers: { "Content-Type": "multipart/form-data" },
	});
};
