"use client";

import { useEffect } from "react";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import RootButton from "@/components/ui/buttons/root/RootButton";

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
				<RootButton onClick={() => reset()}>Try again</RootButton>
			</ContentLayout>
		</div>
	);
}
