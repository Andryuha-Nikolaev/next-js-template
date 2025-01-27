"use client";

import { useEffect } from "react";

import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import RootButton from "@/components/ui/buttons/root/RootButton";
import routesConstants from "@/constants/routes";

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
