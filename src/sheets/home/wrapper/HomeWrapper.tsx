import s from "./HomeWrapper.module.scss";

import AboutSection from "../sections/about/AboutSection";
import CatalogSection from "../sections/catalog/CatalogSection";
import FaqSection from "../sections/faq/FaqSection";
import FeedbackSection from "../sections/feedback/FeedbackSection";
import HeroSection from "../sections/hero/HeroSection";
import NewsSection from "../sections/news/NewsSection";

const HomeWrapper = () => {
	return (
		<div className={s.block}>
			<HeroSection />
			<CatalogSection />
			<AboutSection />
			<NewsSection />
			<FeedbackSection />
			<FaqSection />
		</div>
	);
};

export default HomeWrapper;
