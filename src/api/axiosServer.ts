import axios, {
	type AxiosError,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from "axios";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { options } from "./options";

const axiosServer = axios.create(options);

axiosServer.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	//// Bearer token auth
	// const accessToken = getAccessTokenServer();
	// if (config?.headers && accessToken) {
	// 	config.headers.Authorization = `Bearer ${accessToken}`;
	// }

	config.headers["Cookie"] = cookies();

	return config;
});

axiosServer.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		if (error?.response?.status === 404 && error.config) {
			notFound();
		}
		if (error?.response?.status === 401 && error.config) {
			redirect("/test/auth");
		}
		throw error;
	}
);

export default axiosServer;
