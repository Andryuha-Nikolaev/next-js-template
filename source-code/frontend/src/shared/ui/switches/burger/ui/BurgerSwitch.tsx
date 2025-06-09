"use client";

import { useSiteState } from "$shared/context/site";

import s from "./BurgerSwitch.module.scss";

import { BurgerButton } from "../../../buttons/burger";
import { CloseButton } from "../../../buttons/close";

export const BurgerSwitch = () => {
	const { isOpenBurger, switchBurger } = useSiteState();

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
