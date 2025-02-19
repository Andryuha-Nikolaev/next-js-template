import { cache } from "react";

import { apiFlow, createApi } from "@/shared/api/flow";

export const getDataWithCache = cache(async <T>(url: string): Promise<T> => {
	const api = createApi(apiFlow.cookies);

	const res = await api.get<T>(`${url}`);
	return res.data;
});
