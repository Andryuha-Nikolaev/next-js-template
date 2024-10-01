import clsx from "clsx";

import Social from "@/components/ui/social/Social";
import BurgerSwitch from "@/components/ui/switches/burger/BurgerSwitch";

import s from "./HeaderButtons.module.scss";

import HeaderCart from "../cart/HeaderCart";
import HeaderProfile from "../profile/HeaderProfile";

const HeaderButtons = () => {
	return (
		<div className={s.block}>
			<div className={clsx(s.item, s.social)}>
				<Social />
			</div>
			<div className={s.item}>
				<HeaderCart />
			</div>
			<div className={clsx(s.item, s.profile)}>
				<HeaderProfile />
			</div>
			<div className={clsx(s.item, s.burger)}>
				<BurgerSwitch />
			</div>
		</div>
	);
};

export default HeaderButtons;
