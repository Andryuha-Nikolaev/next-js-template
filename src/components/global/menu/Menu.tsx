"use client";

import clsx from "clsx";
import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import CustomScrollLayout from "@/components/layouts/custom-scroll/CustomScrollLayout";
import { useSiteState } from "@/context/site/SiteStateProvider";
import { categories } from "@/data/categories";

import MenuRight from "./components/right/MenuRight";
import s from "./Menu.module.scss";

import Overlay from "../overlay/Overlay";

const Menu = () => {
	const { isBurgerViewed, isOpenBurger, closeBurger } = useSiteState();

	if (!isBurgerViewed) {
		return null;
	}

	return (
		<Overlay
			className={s.overlay}
			onMouseDown={closeBurger}
			isShown={isOpenBurger}
		>
			{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
			<div
				onMouseDown={(e) => e.stopPropagation()}
				className={clsx(s.block, isOpenBurger && s.open)}
			>
				<ContentLayout>
					<div className={s.content}>
						<div className={s.menu}>
							{categories.map((item, i) => (
								<div key={`desk-menu-${item.title}-${i}`}>
									<p className={s.title}>{item.title}</p>
									<nav>
										<CustomScrollLayout className={s.scrollbar}>
											<ul className={clsx(s.contentWrapper)}>
												{item.categories.map((item) => (
													<li className={s.item} key={`menu-link-${item.url}`}>
														<Link
															onClick={closeBurger}
															className={s.link}
															href={item.url}
														>
															{item.name}
														</Link>
													</li>
												))}
											</ul>
										</CustomScrollLayout>
									</nav>
								</div>
							))}
						</div>
						<MenuRight />
					</div>
				</ContentLayout>
			</div>
		</Overlay>
	);
};

export default Menu;
