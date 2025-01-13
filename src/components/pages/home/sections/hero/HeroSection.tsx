"use client";

import { useRef, useState } from "react";

import clsx from "clsx";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

import ContentLayout from "@/components/layouts/content/ContentLayout";

import s from "./HeroSection.module.scss";

const HeroSection = () => {
	const swiperRef = useRef<SwiperRef>(null);

	const [isSwiperLock, setIsSwiperLock] = useState(true);

	const onPrev = () => {
		swiperRef.current?.swiper.slidePrev();
	};

	const onNext = () => {
		swiperRef.current?.swiper.slideNext();
	};

	return (
		<section className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<Swiper
						onLock={() => setIsSwiperLock(true)}
						onUnlock={() => setIsSwiperLock(false)}
						ref={swiperRef}
						spaceBetween={20}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						loop
					>
						{Array(5)
							.fill("slide")
							.map((_, i) => (
								<SwiperSlide key={i}>
									<div className={s.slideContent}>index: {i}</div>
								</SwiperSlide>
							))}
					</Swiper>
					<div className={clsx(s.navigation, !isSwiperLock && s.visible)}>
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

export default HeroSection;
