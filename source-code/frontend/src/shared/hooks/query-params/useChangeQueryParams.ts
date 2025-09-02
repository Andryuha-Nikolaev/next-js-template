import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

const useChangeQueryParams = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChangeParams = (
		queryString: string,
		method: "push" | "replace" = "push",
		scroll: boolean = false
	) => {
		const url = `${pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;

		router[method](url, {
			scroll: scroll,
		});
	};

	return handleChangeParams;
};

export default useChangeQueryParams;
