import { ContentLayout } from "$shared/layouts/content-layout";

import { Carousel } from "./carousel/Carousel";
import s from "./Hero.module.scss";

const Hero = () => {
	return (
		<section className={s.block}>
			<ContentLayout>
				<Carousel />
			</ContentLayout>
		</section>
	);
};

export default Hero;
