import type React from "react";
import { createContext, useContext, useState } from "react";

import type { SiteStateType } from "../model/types";

const SiteContext = createContext<SiteStateType>({
	isOpenBurger: false,
	isBurgerViewed: false,
	switchBurger() {},
	closeBurger() {},
});

export const useSiteState = () => useContext(SiteContext);

export const SiteStateProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isOpenBurger, setIsOpenBurger] = useState(false);
	const [isBurgerViewed, setIsBurgerViewed] = useState(false);

	const switchBurger = () => {
		if (!isBurgerViewed) {
			setIsBurgerViewed(true);
			setTimeout(() => {
				setIsOpenBurger(true);
			}, 10);
		} else {
			setIsOpenBurger((prevState) => !prevState);
		}
	};

	const closeBurger = () => {
		setIsOpenBurger(false);
	};

	return (
		<SiteContext.Provider
			value={{ isOpenBurger, switchBurger, closeBurger, isBurgerViewed }}
		>
			{children}
		</SiteContext.Provider>
	);
};
