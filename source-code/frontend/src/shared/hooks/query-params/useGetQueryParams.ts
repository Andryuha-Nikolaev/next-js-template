import { useSearchParams } from "next/navigation";

const useGetQueryParams = () => {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	return params;
};

export default useGetQueryParams;
