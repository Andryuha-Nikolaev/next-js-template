import { useEffect } from "react";

import siteConstants from "@/shared/constants/site";

const useScrollLock = (activeState: boolean) => {
	useEffect(() => {
		const bodyStyle = document.body.style;
		const header = document.querySelector("header");

		const lockScroll = () => {
			const paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
			bodyStyle.paddingRight = paddingRight;

			if (siteConstants.IS_FIXED_HEADER) {
				if (header) {
					header.style.paddingRight = paddingRight;
				}
			}

			// bodyStyle.top = `-${window.scrollY}px`;
			bodyStyle.top = bodyStyle.top ? bodyStyle.top : `-${window.scrollY}px`;
			bodyStyle.position = "fixed";
		};

		const unlockScroll = () => {
			const scrollY = bodyStyle.top;
			bodyStyle.position = "";
			bodyStyle.top = "";
			bodyStyle.paddingRight = "";
			if (header && siteConstants.IS_FIXED_HEADER) {
				header.style.paddingRight = "";
			}
			window.scrollTo({
				behavior: "instant",
				top: parseInt(scrollY || "0") * -1,
			});
			// document.documentElement.style.scrollBehavior = "auto";
			// window.scrollTo(0, parseInt(scrollY || "0") * -1);
			// document.documentElement.style.scrollBehavior = "smooth";
		};

		if (activeState) {
			lockScroll();
		} else if (bodyStyle.position === "fixed") {
			unlockScroll();
		}
	}, [activeState]);
};

export default useScrollLock;
