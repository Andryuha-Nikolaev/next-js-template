import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

import PrevNextButton from "@/components/ui/buttons/prev-next/PrevNextButton";
import RootButton from "@/components/ui/buttons/root/RootButton";
import SliderPaginationCount from "@/components/ui/pagination/slider-count/SliderPaginationCount";
import type { IHeroSlide } from "@/types/hero";

import s from "./HeroSlide.module.scss";

interface HeroSlideProps {
	slide: IHeroSlide;
	current: number;
	total: number;
	onPrev: () => void;
	onNext: () => void;
}

const HeroSlide = ({
	slide,
	current,
	total,
	onNext,
	onPrev,
}: HeroSlideProps) => {
	const { title, subtitle, description, button_text, button_link, image } =
		slide;

	return (
		<div className={s.block}>
			<div className={s.imageWrap}>
				{image && (
					<Image
						priority={current === 1}
						className={s.image}
						src={image}
						alt={title}
						width={1440}
						height={700}
					/>
				)}
			</div>
			<div className={s.contentWrap}>
				<div className={s.content}>
					<p className={s.subtitle}>{parse(subtitle)}</p>
					<h1 className={s.title}>{parse(title)}</h1>
					{description && <p className={s.description}>{parse(description)}</p>}
					<div className={s.buttonWrap}>
						{button_link && button_text && (
							<Link className={s.button} href={button_link}>
								<RootButton as="div">{parse(button_text)}</RootButton>
							</Link>
						)}
					</div>

					<div className={s.footer}>
						{total > 1 && (
							<>
								<SliderPaginationCount current={current} total={total} />{" "}
								<div
									key={`hero-slide-buttons-${current}`}
									className={s.buttons}
								>
									<PrevNextButton onClick={onPrev} direction="prev" />
									<PrevNextButton onClick={onNext} direction="next" />
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSlide;
