"use client";

import CustomScrollLayout from "@/components/layouts/custom-scroll/CustomScrollLayout";
import routesConstants from "@/constants/routes";
import type { IBreadcrumb } from "@/types/breadcrumbs";

import s from "./Breadcrumbs.module.scss";
import BreadcrumbsItem from "./components/item/BreadcrumbsItem";

interface BreadcrumbsProps {
	breadcrumbs: IBreadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
	const homePage: IBreadcrumb = routesConstants.HOME;

	const breadcrumbsWithHome = [homePage, ...breadcrumbs];

	return (
		<nav className={s.nav} aria-label="breadcrumb">
			<CustomScrollLayout className={s.scrollbar}>
				<ul
					className={s.list}
					itemScope
					itemType="http://schema.org/BreadcrumbList"
				>
					{breadcrumbsWithHome.map((item, i) => (
						<BreadcrumbsItem
							key={`breadcrumb-${item.name}`}
							index={i}
							{...item}
						/>
					))}
				</ul>
			</CustomScrollLayout>
		</nav>
	);
};

export default Breadcrumbs;
