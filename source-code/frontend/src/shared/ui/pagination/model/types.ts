type BasePaginationProps = {
	totalPages: number;
	visiblePages?: number;
};

export type PaginationProps = BasePaginationProps & {
	currentPage: number;
	onPageChange: (page: number) => void;
};

export type PagePaginationProps = BasePaginationProps;
