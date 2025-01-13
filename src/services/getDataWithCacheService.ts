import { cache } from "react";

import axiosServer from "@/api/axiosServer";

export const getDataWithCache = cache(async <T>(url: string): Promise<T> => {
	const res = await axiosServer<T>(`${url}`);
	return res.data;
});
