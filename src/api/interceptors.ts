import axios, {
	type AxiosError,
	type AxiosResponse,
	type CreateAxiosDefaults,
	type InternalAxiosRequestConfig,
} from "axios";

import { getAccessToken, removeFromStorage } from "@/services/authTokenService";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const options: CreateAxiosDefaults = {
	baseURL: baseUrl,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};

const axiosClient = axios.create(options);

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const accessToken = getAccessToken();

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

axiosClient.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		if (error?.response?.status === 401 && error.config) {
			removeFromStorage();
		}
		throw error;
	}
);

export { axiosClient, options };
