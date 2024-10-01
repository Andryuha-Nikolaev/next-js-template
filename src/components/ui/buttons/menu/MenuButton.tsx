"use client";

import RootButton from "@/components/ui/buttons/root/RootButton";
import { useSiteState } from "@/context/site/SiteStateProvider";
import BurgerIcon from "@/icons/burger/BurgerIcon";

const MenuButton = () => {
	const { switchBurger } = useSiteState();

	return (
		<RootButton
			onClick={switchBurger}
			colorVariant="var3"
			size="middle"
			Icon={<BurgerIcon />}
		>
			Меню каталога
		</RootButton>
	);
};

export default MenuButton;
