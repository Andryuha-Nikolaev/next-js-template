"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

import type { IHeroSlide } from "@/types/hero";

import HeroSlide from "./components/slide/HeroSlide";
import s from "./HeroSlider.module.scss";
import image1 from "./images/antik.webp";

const data: IHeroSlide[] = [
	{
		title: "Прототип нового сервиса — это как структура",
		subtitle: "Надзаголовок",
		description:
			"Для современного мира укрепление и развитие внутренней структуры выявляет срочную потребность системы массового участия",
		button_text: "Кнопка",
		button_link: "/news",
		image: image1.src,
	},
	{
		title: "Прототип нового сервиса — это как структура2",
		subtitle: "Надзаголовок2",
		description:
			"Для современного мира укрепление и развитие внутренней структуры выявляет срочную потребность системы массового участия2",
		button_text: "Кнопка2",
		button_link: "/news2",
		image: image1.src,
	},
	{
		title: "Прототип нового сервиса — это как структура3",
		subtitle: "Надзаголовок3",
		description:
			"Для современного мира укрепление и развитие внутренней структуры выявляет срочную потребность системы массового участия3",
		button_text: "Кнопка3",
		button_link: "/news3",
		image: image1.src,
	},
];

const HeroSlider = () => {
	const swiperRef = useRef<SwiperRef>(null);

	const total = data.length;

	const onPrev = () => {
		swiperRef.current?.swiper.slidePrev();
	};

	const onNext = () => {
		swiperRef.current?.swiper.slideNext();
	};

	return (
		<div className={s.block}>
			<Swiper ref={swiperRef} loop>
				{data.map((item, i) => (
					<SwiperSlide key={`hero-slide-${i}`}>
						<HeroSlide
							onPrev={onPrev}
							onNext={onNext}
							total={total}
							current={i + 1}
							slide={item}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroSlider;
