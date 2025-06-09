"use client";

import clsx from "clsx";

import { useSiteState } from "$shared/context/site";
import useScrollLock from "$shared/hooks/scroll/useScrollLock";
import { ContentLayout } from "$shared/layouts/content-layout";
import { CustomScrollLayout } from "$shared/layouts/custom-scroll";

import s from "./Burger.module.scss";
import BurgerNavbar from "./navbar/BurgerNavbar";

export const Burger = () => {
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
			<div className={s.wrapper}>
				<CustomScrollLayout className={s.scrollbar}>
					<ContentLayout>
						<div className={s.content}>
							<BurgerNavbar />
						</div>
					</ContentLayout>
				</CustomScrollLayout>
			</div>
		</div>
	);
};
