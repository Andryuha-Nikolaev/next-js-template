import Link from "next/link";

import routesConstants from "@/constants/routes";
import HeaderLogoIcon from "@/icons/header-logo/HeaderLogoIcon";

import s from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
	return (
		<div className={s.block}>
			<Link
				aria-label={routesConstants.HOME.name}
				href={routesConstants.HOME.url}
			>
				<HeaderLogoIcon />
			</Link>
		</div>
	);
};

export default HeaderLogo;
