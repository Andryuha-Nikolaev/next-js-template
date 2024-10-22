"use client";

import { useEffect } from "react";

import ContentLayout from "@/components/layouts/content/ContentLayout";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<ContentLayout>
				<h2>{error.message}</h2>
				<button onClick={() => reset()}>Try again</button>
			</ContentLayout>
		</div>
	);
}
