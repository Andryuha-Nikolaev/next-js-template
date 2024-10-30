import { cache } from "react";

import { axiosClassic } from "@/api/interceptors";
import type { CustomPage } from "@/types/customPage";

export const getPage = cache(async (slug: string) => {
	const res = await axiosClassic<CustomPage>(`custom-page/${slug}`);

	return res.data;
});
