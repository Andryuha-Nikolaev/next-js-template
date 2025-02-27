"use client";

import { useEffect } from "react";

import Link from "next/link";

import routesConstants from "@/shared/constants/routes";
import ContentLayout from "@/shared/layouts/content/ContentLayout";
import RootButton from "@/shared/ui/buttons/root/RootButton";

export default function Error({
	error,
}: {
	error: Error;
	// reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<ContentLayout>
			<h2>{error.message}</h2>

			<RootButton as={Link} href={routesConstants.HOME.url}>
				На главную
			</RootButton>
		</ContentLayout>
	);
}
