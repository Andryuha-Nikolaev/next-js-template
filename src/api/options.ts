import { type CreateAxiosDefaults } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const options: CreateAxiosDefaults = {
	baseURL: baseUrl,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};

export { options };
