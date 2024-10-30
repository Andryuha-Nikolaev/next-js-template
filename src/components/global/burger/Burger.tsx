"use client";

import clsx from "clsx";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import CustomScrollLayout from "@/components/layouts/custom-scroll/CustomScrollLayout";
import { useSiteState } from "@/context/site/SiteStateProvider";

import s from "./Burger.module.scss";
import BurgerNavbar from "./components/navbar/BurgerNavbar";

const Burger = () => {
	const { isOpenBurger, isBurgerViewed } = useSiteState();

	if (!isBurgerViewed) {
		return null;
	}

	return (
		<div className={clsx(s.block, isOpenBurger && s.open)}>
			<CustomScrollLayout className={s.wrapper}>
				<ContentLayout>
					<div className={s.content}>
						<BurgerNavbar />
					</div>
				</ContentLayout>
			</CustomScrollLayout>
		</div>
	);
};

export default Burger;
