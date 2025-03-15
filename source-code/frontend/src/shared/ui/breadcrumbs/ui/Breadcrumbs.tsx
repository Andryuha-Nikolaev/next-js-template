"use client";

import routesConstants from "@/shared/constants/routes";
import { CustomScrollLayout } from "@/shared/layouts/custom-scroll";

import s from "./Breadcrumbs.module.scss";
import { BreadcrumbsItem } from "./item/BreadcrumbsItem";

import type { Breadcrumb, BreadcrumbsProps } from "../model/types";

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
	const homePage: Breadcrumb = {
		name: routesConstants.HOME.name,
		url: routesConstants.HOME.url,
	};

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
						<BreadcrumbsItem key={i} index={i} {...item} />
					))}
				</ul>
			</CustomScrollLayout>
		</nav>
	);
};
