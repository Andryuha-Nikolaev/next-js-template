import Link from "next/link";

import ContentLayout from "@/shared/layouts/content/ContentLayout";
import { HomePage } from "@/views/home";

export default function Home() {
	return (
		<>
			<HomePage />
			<ContentLayout>
				HOME <Link href={"/test"}>TEST</Link>{" "}
				<Link href={"/test/auth"}>AUTH</Link>{" "}
				<Link href={"/test#form"}>TEST FORM</Link>{" "}
				<Link href={"/test/images"}>IMAGES</Link>{" "}
				<Link href={"/test/slug123"}>CUSTOM PAGE</Link>{" "}
			</ContentLayout>
		</>
	);
}
