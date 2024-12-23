import { useRouter } from "nextjs-toploader/app";

const useChangeQueryParams = () => {
	const router = useRouter();

	const handleChange = (queryString: string) => {
		const url = `${window.location.pathname}${queryString}${window.location.hash}`;

		router.push(url, {
			scroll: false,
		});
	};

	return handleChange;
};

export default useChangeQueryParams;
