"use client";

import clsx from "clsx";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import CustomScrollLayout from "@/components/layouts/custom-scroll/CustomScrollLayout";
import { useSiteState } from "@/context/site/SiteStateProvider";
import useScrollLock from "@/hooks/scroll/useScrollLock";

import s from "./Burger.module.scss";
import BurgerNavbar from "./components/navbar/BurgerNavbar";

const Burger = () => {
	const { isOpenBurger, isBurgerViewed, closeBurger } = useSiteState();

	useScrollLock(isOpenBurger);

	if (!isBurgerViewed) {
		return null;
	}

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			onClick={(e) => {
				if (e.target instanceof Element) {
					{
						const link = e.target.closest("a");
						if (link && link?.target !== "_blank") {
							closeBurger();
						}
					}
				}
			}}
			className={clsx(s.block, isOpenBurger && s.open)}
		>
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
