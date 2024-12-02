import { axiosClassic } from "@/api/interceptors";

export const sendFormData = (url: string, data: FormData) => {
	return axiosClassic.post(url, data, {
		headers: { "Content-Type": "multipart/form-data" },
	});
};
