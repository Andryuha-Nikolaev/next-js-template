"use client";

import { useRef } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

import useSwiper from "$shared/hooks/swiper/useSwiper";

import s from "./Carousel.module.scss";
import { Navigation } from "./navigation/Navigation";
import { Slide } from "./slide/Slide";

const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const LOOP = false;

export const Carousel = () => {
	const swiperRef = useRef<SwiperRef>(null);

	const { isNavigationVisible, onPrev, onNext, isFirstSlide, isLastSlide } =
		useSwiper(swiperRef);

	return (
		<div className={s.block}>
			<Swiper
				ref={swiperRef}
				spaceBetween={20}
				modules={[Pagination]}
				pagination={{ dynamicBullets: true }}
				grabCursor
				loop={LOOP}
			>
				{slides.map(({ id }) => (
					<SwiperSlide key={id}>
						<Slide id={id} />
					</SwiperSlide>
				))}
			</Swiper>
			<Navigation
				onPrev={onPrev}
				onNext={onNext}
				isVisible={isNavigationVisible}
				isFirstSlide={isFirstSlide}
				isLastSlide={isLastSlide}
				loop={LOOP}
			/>
		</div>
	);
};
