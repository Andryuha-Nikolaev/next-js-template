import { useEffect, useState } from "react";

const useScrollPosition = () => {
	const [isTop, setIsTop] = useState(true);
	const [isBottom, setIsBottom] = useState(false);
	const SCROLL_OFFSET = 100;

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const innerHeight = window.innerHeight;
			const scrollHeight = document.documentElement.scrollHeight;

			if (scrollY === 0) {
				setIsTop(true);
			} else {
				setIsTop(false);
			}

			if (scrollHeight - (scrollY + innerHeight) <= SCROLL_OFFSET) {
				setIsBottom(true);
			} else {
				setIsBottom(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return { isTop, isBottom };
};

export default useScrollPosition;
