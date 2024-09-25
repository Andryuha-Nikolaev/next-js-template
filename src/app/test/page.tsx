import type { Metadata } from "next";
import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import routesConstants from "@/constants/routes";

export const metadata: Metadata = {
	title: routesConstants.TEST.title,
};

export default function Test() {
	return (
		<div>
			<ContentLayout>
				<h1>h1 Прототип нового сервиса — это как структура</h1>
				<h2>h2 Прототип нового сервиса — это как структура</h2>
				<h3>h3 Прототип нового сервиса — это как структура</h3>
				<h4>h4 Прототип нового сервиса — это как структура</h4>
				<p>p Прототип нового сервиса — это как структура</p>
				<small>small Прототип нового сервиса — это как структура</small>
				<Link href={"/"}>на главную</Link>
			</ContentLayout>
		</div>
	);
}
