"use client";

import { useRef } from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import type { IProduct } from "@/types/product";

import s from "./ProductSlider.module.scss";

import PrevNextButton from "../../buttons/prev-next/PrevNextButton";
import ProductCard from "../../cards/product/ProductCard";

interface ProductSliderProps {
	products: IProduct[];
	autoplay?: boolean;
}

const ProductSlider = ({ products, autoplay = true }: ProductSliderProps) => {
	const swiperRef = useRef<SwiperRef>(null);

	const onPrev = () => {
		swiperRef.current?.swiper.slidePrev();
	};

	const onNext = () => {
		swiperRef.current?.swiper.slideNext();
	};

	const breakpoints = {
		1280: {
			slidesPerView: 5,
		},
		1024: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 3,
		},
	};

	return (
		<div className={s.block}>
			<ContentLayout>
				<Swiper
					modules={[Autoplay]}
					ref={swiperRef}
					breakpoints={breakpoints}
					slidesPerView={2}
					spaceBetween={10}
					autoplay={
						autoplay
							? {
									delay: 5000,
									disableOnInteraction: true,
								}
							: false
					}
					loop={true}
					className={s.swiper}
				>
					{products.map((item, i) => (
						<SwiperSlide
							className={s.slide}
							key={`product-slide-${item.title}-${i}`}
						>
							<div className={s.card}>
								<ProductCard card={item} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</ContentLayout>
			<div className={s.buttons}>
				<PrevNextButton onClick={onPrev} direction="prev" />
				<PrevNextButton onClick={onNext} direction="next" />
			</div>
		</div>
	);
};

export default ProductSlider;
