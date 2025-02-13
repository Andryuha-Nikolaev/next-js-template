"use client";

import clsx from "clsx";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import siteConstants from "@/shared/constants/site";
import { useSiteState } from "@/shared/context/site";

import HeaderButtons from "./components/buttons/HeaderButtons";
import HeaderLogo from "./components/logo/HeaderLogo";
import HeaderNavbar from "./components/navbar/HeaderNavbar";
import s from "./Header.module.scss";

const Header = () => {
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

export default Header;
