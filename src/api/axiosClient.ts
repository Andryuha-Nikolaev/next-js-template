import axios, {
	type AxiosError,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from "axios";

import { options } from "./options";

const axiosClient = axios.create(options);

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	//// Bearer token auth
	// const accessToken = getAccessToken();
	// if (config?.headers && accessToken) {
	// 	config.headers.Authorization = `Bearer ${accessToken}`;
	// }

	return config;
});

axiosClient.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		//// Bearer token auth
		// if (error?.response?.status === 401 && error.config) {
		// 	removeFromStorage();
		// }
		throw error;
	}
);

export default axiosClient;
