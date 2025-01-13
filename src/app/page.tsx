import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import Home from "@/components/pages/home/Home";

export default function HomePage() {
	return (
		<>
			<Home />
			<ContentLayout>
				HOME <Link href={"/test"}>TEST</Link>{" "}
				<Link href={"/test/auth"}>AUTH</Link>{" "}
				<Link href={"/test#form"}>TEST FORM</Link>
			</ContentLayout>
		</>
	);
}
