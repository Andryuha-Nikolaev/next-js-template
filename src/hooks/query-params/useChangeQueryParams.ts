import { useRouter } from "nextjs-toploader/app";

const useChangeQueryParams = () => {
	const router = useRouter();

	const handleChange = (
		queryString: string,
		method: "push" | "replace" = "push",
		scroll: boolean = false
	) => {
		const url = `${window.location.pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;

		router[method](url, {
			scroll: scroll,
		});
	};

	return handleChange;
};

export default useChangeQueryParams;
