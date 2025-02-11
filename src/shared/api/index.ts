// import axios from "axios";

// export const api = axios.create({
// 	baseURL: process.env.NEXT_PUBLIC_API_URL,
// 	withCredentials: true,
// });

import axios from "axios";

/**
 * Создать строку Basic Auth.
 * @param {string} username - Имя пользователя.
 * @param {string} password - Пароль пользователя.
 * @returns {string} Заголовок Authorization.
 */

function createBasicAuthHeader(username: string, password: string): string {
	const credentials = `${username}:${password}`;
	const base64Credentials = Buffer.from(credentials).toString("base64");
	return `Basic ${base64Credentials}`;
}
const username = process.env.BASIC_AUTH_LOGIN;
const password = process.env.BASIC_AUTH_PASSWORD;

const localHeaders =
	username && password
		? {
				headers: {
					Authorization: createBasicAuthHeader(username, password),
				},
			}
		: {};
export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
	...localHeaders,
});
