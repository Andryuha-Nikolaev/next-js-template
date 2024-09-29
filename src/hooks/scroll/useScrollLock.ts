import { useEffect } from "react";

const useScrollLock = (activeState: boolean) => {
	useEffect(() => {
		const bodyStyle = document.body.style;

		const lockScroll = () => {
			bodyStyle.top = `-${window.scrollY}px`;
			bodyStyle.position = "fixed";
		};

		const unlockScroll = () => {
			const scrollY = bodyStyle.top;
			bodyStyle.position = "";
			bodyStyle.top = "";
			// document.documentElement.style.scrollBehavior = "auto";
			window.scrollTo(0, parseInt(scrollY || "0") * -1);
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
