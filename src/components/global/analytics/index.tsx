"use client";

import useIsProd from "@/hooks/environment/useIsProd";

import YandexMetrika from "./YandexMetrika";

export default function Analytics() {
	const isProd = useIsProd();
	if (!isProd) {
		return null;
	}

	return (
		<>
			<YandexMetrika />
		</>
	);
}
