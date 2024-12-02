"use client";

import { useSiteState } from "@/context/site/SiteStateProvider";
import useScrollLock from "@/hooks/scroll/useScrollLock";

import s from "./BurgerSwitch.module.scss";

import BurgerButton from "../../buttons/burger/BurgerButton";
import CloseButton from "../../buttons/close/CloseButton";

const BurgerSwitch = () => {
	const { isOpenBurger, switchBurger } = useSiteState();

	useScrollLock(isOpenBurger);

	return (
		<div className={s.block}>
			{isOpenBurger ? (
				<CloseButton onClick={switchBurger} />
			) : (
				<BurgerButton onClick={switchBurger} />
			)}
		</div>
	);
};

export default BurgerSwitch;
