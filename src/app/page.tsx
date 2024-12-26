import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";

export default function Home() {
	return (
		<ContentLayout>
			HOME <Link href={"/test"}>TEST</Link>{" "}
			<Link href={"/test/auth"}>AUTH</Link>
		</ContentLayout>
	);
}
