import Link from "next/link";

import routesConstants from "@/constants/routes";
import { useSiteState } from "@/context/site/SiteStateProvider";
import HeaderLogoIcon from "@/icons/header-logo/HeaderLogoIcon";

import s from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
	const { closeBurger } = useSiteState();

	return (
		<div className={s.block}>
			<Link
				onClick={closeBurger}
				aria-label={routesConstants.HOME.name}
				href={routesConstants.HOME.url}
			>
				<HeaderLogoIcon />
			</Link>
		</div>
	);
};

export default HeaderLogo;
