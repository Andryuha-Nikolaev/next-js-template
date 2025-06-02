"use client";

import { useRef } from "react";

import clsx from "clsx";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

import useSwiper from "@/shared/hooks/swiper/useSwiper";
import { ContentLayout } from "@/shared/layouts/content-layout";

import s from "./Hero.module.scss";

const Hero = () => {
	const swiperRef = useRef<SwiperRef>(null);

	const { isNavigationVisible, onPrev, onNext } = useSwiper(swiperRef);

	return (
		<section className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<Swiper
						ref={swiperRef}
						spaceBetween={20}
						modules={[Pagination]}
						pagination={{ dynamicBullets: true }}
						grabCursor
						loop
					>
						{Array(10)
							.fill("slide")
							.map((_, i) => (
								<SwiperSlide key={i}>
									<div
										className={s.slideContent}
										style={{ backgroundColor: i % 2 ? "#608dff" : "#496dcb" }}
									>
										index: {i}
									</div>
								</SwiperSlide>
							))}
					</Swiper>
					<div className={clsx(s.navigation, isNavigationVisible && s.visible)}>
						<button className={clsx(s.prev)} onClick={onPrev}>
							prev
						</button>
						<button className={clsx(s.next)} onClick={onNext}>
							next
						</button>
					</div>
				</div>
			</ContentLayout>
		</section>
	);
};

export default Hero;
