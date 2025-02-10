import { api } from ".";
import axios, { type AxiosInstance } from "axios";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

// import { TOKEN } from "@/constants/auth";
// import { buildRedirectQuery } from "@/features/auth/lib/redirect";

export type Flow = (
	instance: AxiosInstance
) => AxiosInstance | undefined | void;

export const applyApiFlow = (api: AxiosInstance, flow: Flow) =>
	flow(api) ?? api;

export const mergeApiFlows =
	(...flows: Flow[]): Flow =>
	(api) =>
		flows.reduce(applyApiFlow, api);

export const createApi = (...flows: Flow[]) =>
	applyApiFlow(axios.create(api.defaults), mergeApiFlows(...flows));

export const apiFlow = {
	/**
	 * @private should be used for fine-grained control
	 */
	cookies: (api: AxiosInstance) => {
		api.defaults.headers.common.Cookie = cookies().toString();
	},

	/**
	 * @private should be used for fine-grained control
	 */
	// unauthorized: (area: "action" | "component") => (api: AxiosInstance) => {
	// 	const redirectTo = headers().get("x-pathname") ?? undefined;

	// 	const unauthorized = () =>
	// 		redirect(
	// 			`/${area === "component" ? "logout" : ""}${buildRedirectQuery(redirectTo)}`
	// 		);

	// 	if (!cookies().has(TOKEN)) {
	// 		unauthorized();
	// 	}

	// 	api.interceptors.response.use(null, (error) => {
	// 		if (axios.isAxiosError(error)) {
	// 			const status = error.response?.status;

	// 			if (status === 401 || status === 403) {
	// 				unauthorized();
	// 			}
	// 		}

	// 		throw error;
	// 	});
	// },

	// authorized: (area: "action" | "component") =>
	// 	mergeApiFlows(apiFlow.cookies, apiFlow.unauthorized(area)),

	notFound: (api: AxiosInstance) => {
		api.interceptors.response.use(null, (error) => {
			if (axios.isAxiosError(error)) {
				const status = error.response?.status;

				if (status === 404) {
					notFound();
				}
			}

			throw error;
		});
	},
};
