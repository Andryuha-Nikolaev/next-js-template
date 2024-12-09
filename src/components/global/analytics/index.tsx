"use client";

import { isProd } from "@/utils/environment/isProd";

import YandexMetrika from "./YandexMetrika";

export default function Analytics() {
	const prod = isProd();

	if (!prod) {
		return null;
	}

	return (
		<>
			<YandexMetrika />
		</>
	);
}
