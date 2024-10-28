"use client";

import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

import ContentLayout from "@/components/layouts/content/ContentLayout";

import s from "./TestContent.module.scss";

const TestContent = () => {
	const router = useRouter();

	return (
		<div className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<h1>TEST</h1>
					<Link href={"/"}>next/link HOME</Link>
					<button onClick={() => router.push("/")}>
						nextjs-toploader push HOME
					</button>
				</div>
			</ContentLayout>
		</div>
	);
};

export default TestContent;
