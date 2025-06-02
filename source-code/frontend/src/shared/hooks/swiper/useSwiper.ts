import { useEffect, useState, type RefObject } from "react";

import type { SwiperRef } from "swiper/react";

const useSwiper = (ref: RefObject<SwiperRef>) => {
	const [isNavigationVisible, setIsNavigationVisible] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isFirstSlide, setIsFirstSlide] = useState(true);
	const [isLastSlide, setIsLastSlide] = useState(false);

	const onPrev = () => ref.current?.swiper.slidePrev();
	const onNext = () => ref.current?.swiper.slideNext();

	useEffect(() => {
		const swiperInstance = ref.current?.swiper;

		if (!swiperInstance) return;

		const updateNavigationState = () => {
			setIsNavigationVisible(!swiperInstance.isLocked);
			setActiveIndex(swiperInstance.realIndex);
			setIsFirstSlide(swiperInstance.isBeginning);
			setIsLastSlide(swiperInstance.isEnd);
		};

		updateNavigationState();

		swiperInstance.on("lock", updateNavigationState);
		swiperInstance.on("unlock", updateNavigationState);
		swiperInstance.on("slideChange", updateNavigationState);

		return () => {
			swiperInstance.off("lock", updateNavigationState);
			swiperInstance.off("unlock", updateNavigationState);
			swiperInstance.off("slideChange", updateNavigationState);
		};
	}, [ref]);

	return {
		onPrev,
		onNext,
		isNavigationVisible,
		activeIndex,
		isFirstSlide,
		isLastSlide,
	};
};

export default useSwiper;
