"use client";

import clsx from "clsx";

import siteConstants from "$shared/constants/site";
import { useSiteState } from "$shared/context/site";
import { ContentLayout } from "$shared/layouts/content-layout";

import HeaderButtons from "./buttons/HeaderButtons";
import s from "./Header.module.scss";
import HeaderLogo from "./logo/HeaderLogo";
import HeaderNavbar from "./navbar/HeaderNavbar";

export const Header = () => {
	const { closeBurger } = useSiteState();

	return (
		<header
			className={clsx(
				s.header,
				siteConstants.IS_FIXED_HEADER && s.header_fixed
			)}
		>
			<ContentLayout>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
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
					className={s.block}
				>
					<HeaderLogo />
					<HeaderNavbar />
					<HeaderButtons />
				</div>
			</ContentLayout>
		</header>
	);
};
