import clsx from "clsx";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import siteConstants from "@/constants/site";

import HeaderButtons from "./components/buttons/HeaderButtons";
import HeaderLogo from "./components/logo/HeaderLogo";
import HeaderNavbar from "./components/navbar/HeaderNavbar";
import s from "./Header.module.scss";

const Header = () => {
	return (
		<header
			className={clsx(
				s.header,
				siteConstants.IS_FIXED_HEADER && s.header_fixed
			)}
		>
			<ContentLayout>
				<div className={s.block}>
					<HeaderLogo />
					<HeaderNavbar />
					<HeaderButtons />
				</div>
			</ContentLayout>
		</header>
	);
};

export default Header;
