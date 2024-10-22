import HeroSlider from "./components/slider/HeroSlider";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
	return (
		<section className={s.block}>
			<HeroSlider />
		</section>
	);
};

export default HeroSection;
