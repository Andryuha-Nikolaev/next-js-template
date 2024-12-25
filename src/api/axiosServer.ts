import axios, {
	type AxiosError,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from "axios";
import { notFound, redirect } from "next/navigation";

import { getAccessTokenServer } from "@/services/authTokenServerService";

import { options } from "./interceptors";

const axiosServer = axios.create(options);

axiosServer.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const accessToken = getAccessTokenServer();

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

axiosServer.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		if (error?.response?.status === 404 && error.config) {
			notFound();
		}
		if (error?.response?.status === 401 && error.config) {
			redirect("/");
		}
		throw error;
	}
);

export { axiosServer };
