import axiosClient from "@/api/axiosClient";

export const sendFormData = (url: string, data: FormData) => {
	return axiosClient.post(url, data, {
		headers: { "Content-Type": "multipart/form-data" },
	});
};
