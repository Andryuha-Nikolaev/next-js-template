"use client";

import Link from "next/link";

import MenuAccordion from "@/components/ui/accordion/menu/MenuAccordion";
import routesConstants from "@/constants/routes";
import { navbar } from "@/constants/site";
import { useSiteState } from "@/context/site/SiteStateProvider";

import s from "./BurgerNavbar.module.scss";

const BurgerNavbar = () => {
	const { closeBurger } = useSiteState();

	return (
		<div className={s.block}>
			<Link
				onClick={closeBurger}
				className={s.link}
				href={routesConstants.NEWS.url}
			>
				{routesConstants.NEWS.name}
			</Link>
			<Link
				onClick={closeBurger}
				className={s.link}
				href={routesConstants.FAQ.url}
			>
				{routesConstants.FAQ.name}
			</Link>
			<MenuAccordion menu={navbar} />
		</div>
	);
};

export default BurgerNavbar;
