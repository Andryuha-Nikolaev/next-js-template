import { cache } from "react";

import axiosServer from "@/api/axiosServer";
import type { CustomPage } from "@/types/customPage";

export const getPage = cache(async (slug: string) => {
	const res = await axiosServer<CustomPage>(`/custom-page/${slug}`);

	return res.data;
});
