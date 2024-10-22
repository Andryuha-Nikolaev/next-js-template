import ContentLayout from "@/components/layouts/content/ContentLayout";
import SectionLayout from "@/components/layouts/section/SectionLayout";
import NewsGrid from "@/components/ui/grid/news/NewsGrid";
import routesConstants from "@/constants/routes";
import type { INewsArticle } from "@/types/news";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import s from "./NewsSection.module.scss";

const news: INewsArticle[] = [
	{
		title:
			"Современная методология разработки показала себя во всей красе и конечно же раскрыла суть",
		created_at: "2024-09-16T13:38:22.000000Z",
		image: image1.src,
		url: "/news",
	},
	{
		title: "Современная методология разработки ",
		created_at: "2024-09-16T13:38:22.000000Z",
		image: image2.src,
		url: "/news",
	},
	{
		title: "Современная методология разработки",
		created_at: "2024-09-16T13:38:22.000000Z",
		image: image3.src,
		url: "/news",
	},
	{
		title: "Современная методология",
		created_at: "2024-09-16T13:38:22.000000Z",
		image: image4.src,
		url: "/news",
	},
	{
		title:
			"Современная методология разработки показала себя во всей красе и конечно же раскрыла суть",
		created_at: "2024-09-16T13:38:22.000000Z",
		image: image5.src,
		url: "/news",
	},
];

const NewsSection = () => {
	return (
		<div className={s.block}>
			<SectionLayout
				title="Последние новости"
				button={{ text: "Открыть все новости", link: routesConstants.NEWS.url }}
			>
				<ContentLayout>
					<NewsGrid news={news} />
				</ContentLayout>
			</SectionLayout>
		</div>
	);
};

export default NewsSection;
