import type React from "react";
import { createContext, useContext, useState } from "react";

import type { SiteStateType } from "./types/site";

const SiteContext = createContext<SiteStateType>({
	isOpenBurger: false,
	isBurgerViewed: false,
	switchBurger() {},
});

export const useSiteState = () => useContext(SiteContext);

const SiteStateProvider = ({ children }: { children: React.ReactNode }) => {
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

	return (
		<SiteContext.Provider
			value={{ isOpenBurger, switchBurger, isBurgerViewed }}
		>
			{children}
		</SiteContext.Provider>
	);
};

export default SiteStateProvider;
