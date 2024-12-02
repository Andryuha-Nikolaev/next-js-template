import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import RootButton from "@/components/ui/buttons/root/RootButton";
import routesConstants from "@/constants/routes";

export default function NotFound() {
	return (
		<ContentLayout>
			<h2>404</h2>
			<RootButton as={Link} href={routesConstants.HOME.url}>
				На главную
			</RootButton>
		</ContentLayout>
	);
}
