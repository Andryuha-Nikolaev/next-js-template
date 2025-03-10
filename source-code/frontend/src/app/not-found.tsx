import Link from "next/link";

import routesConstants from "@/shared/constants/routes";
import { ContentLayout } from "@/shared/layouts/content-layout";
import RootButton from "@/shared/ui/buttons/root/RootButton";

export default function NotFound() {
	return (
		<ContentLayout>
			<h2>Not found 404</h2>
			<div>
				<RootButton as={Link} href={routesConstants.HOME.url}>
					На главную
				</RootButton>
			</div>
		</ContentLayout>
	);
}
