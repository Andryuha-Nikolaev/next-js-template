"use client";

import clsx from "clsx";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import CustomScrollLayout from "@/components/layouts/custom-scroll/CustomScrollLayout";
import RootButton from "@/components/ui/buttons/root/RootButton";
import routesConstants from "@/constants/routes";
import { useSiteState } from "@/context/site/SiteStateProvider";
import { categories } from "@/data/categories";

import image from "./images/image.jpg";
import s from "./Menu.module.scss";

import Overlay from "../overlay/Overlay";

const Menu = () => {
	const { isBurgerViewed, isOpenBurger, switchBurger } = useSiteState();

	const { push } = useRouter();

	if (!isBurgerViewed) {
		return null;
	}

	return (
		<Overlay
			className={s.overlay}
			onMouseDown={switchBurger}
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
														<Link className={s.link} href={item.url}>
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
						<div className={s.second}>
							<Image className={s.image} src={image} alt="" />

							<RootButton
								onClick={() => push(routesConstants.CATALOG.url)}
								className={s.button}
								colorVariant="var2"
							>
								Открыть весь каталог
							</RootButton>
						</div>
					</div>
				</ContentLayout>
			</div>
		</Overlay>
	);
};

export default Menu;
