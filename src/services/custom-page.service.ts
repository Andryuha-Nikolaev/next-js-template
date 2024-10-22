import { cache } from "react";

import { axiosClassic } from "@/api/interceptors";
import type { ICustomPage } from "@/types/custom-page";

export const getPage = cache(async (id: string) => {
	const res = await axiosClassic<ICustomPage>(`custom-page/${id}`);

	return res.data;
});
