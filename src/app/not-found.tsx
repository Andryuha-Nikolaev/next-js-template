import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import routesConstants from "@/shared/constants/routes";
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
