"use client";

import { useState } from "react";

import { PagePagination, Pagination } from "$shared/ui/pagination";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const TestPagination = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<TestPageWrapper title="Pagination">
			<h4>Root pagination</h4>
			<Pagination
				totalPages={60}
				currentPage={currentPage}
				onPageChange={setCurrentPage}
			/>
			<h4>Page pagination</h4>
			<PagePagination totalPages={20} />
		</TestPageWrapper>
	);
};
