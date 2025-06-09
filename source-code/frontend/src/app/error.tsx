"use client";

import { useEffect } from "react";

import { ErrorPage } from "$views/error";

export default function Error({ error }: { error: Error }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<ErrorPage title="Что-то пошло не так" subtitle={error.message ?? ""} />
	);
}
