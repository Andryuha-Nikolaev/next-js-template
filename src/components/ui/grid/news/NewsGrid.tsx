import type { INewsArticle } from "@/types/news";

import s from "./NewsGrid.module.scss";

import NewsCard from "../../cards/news/NewsCard";

interface NewsGridProps {
	news: INewsArticle[];
}

const NewsGrid = ({ news }: NewsGridProps) => {
	return (
		<div className={s.block}>
			{news.map((item, i) => (
				<NewsCard key={`news-article-${i}`} card={item} />
			))}
		</div>
	);
};

export default NewsGrid;
