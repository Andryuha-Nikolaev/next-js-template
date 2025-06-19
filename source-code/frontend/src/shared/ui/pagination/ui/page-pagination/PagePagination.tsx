"use client";

import { Suspense } from "react";

import { SearchParamsNames } from "$shared/constants/searchParamsNames";
import useChangeQueryParams from "$shared/hooks/query-params/useChangeQueryParams";
import useGetQueryParams from "$shared/hooks/query-params/useGetQueryParams";

import type { PagePaginationProps } from "../../model/types";
import { Pagination } from "../root/Pagination";

const PagePaginationComponent = ({ ...props }: PagePaginationProps) => {
	const handleChangeParams = useChangeQueryParams();

	const params = useGetQueryParams();
	const currentPage = params.get(SearchParamsNames.PAGE) || "1";

	return (
		<Pagination
			currentPage={+currentPage}
			onPageChange={(e) => {
				params.set(SearchParamsNames.PAGE, e.toString());
				handleChangeParams(params.toString(), "push", false);
			}}
			{...props}
		/>
	);
};

export const PagePagination = ({ ...props }: PagePaginationProps) => {
	return (
		<Suspense>
			<PagePaginationComponent {...props} />
		</Suspense>
	);
};
