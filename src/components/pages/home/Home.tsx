import s from "./Home.module.scss";
import HeroSection from "./sections/hero/HeroSection";

const Home = () => {
	return (
		<div className={s.block}>
			<HeroSection />
		</div>
	);
};

export default Home;
