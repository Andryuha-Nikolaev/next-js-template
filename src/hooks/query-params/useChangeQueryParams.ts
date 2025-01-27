import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

const useChangeQueryParams = () => {
	const router = useRouter();

	const handleChangeParams = (
		queryString: string,
		method: "push" | "replace" = "push",
		scroll: boolean = false
	) => {
		const url = `${window.location.pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;

		router[method](url, {
			scroll: scroll,
		});
	};
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	return { handleChangeParams, params };
};

export default useChangeQueryParams;
