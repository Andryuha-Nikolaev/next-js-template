import clsx from "clsx";

import BurgerSwitch from "@/components/ui/switches/burger/BurgerSwitch";

import s from "./HeaderButtons.module.scss";

const HeaderButtons = () => {
	return (
		<div className={s.block}>
			buttons
			<div className={clsx(s.item, s.burger)}>
				<BurgerSwitch />
			</div>
		</div>
	);
};

export default HeaderButtons;
