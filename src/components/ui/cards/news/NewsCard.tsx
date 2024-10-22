import Image from "next/image";
import Link from "next/link";

import type { INewsArticle } from "@/types/news";
import { formatDate } from "@/utils/formatDate";

import s from "./NewsCard.module.scss";

interface NewsCardProps {
	card: INewsArticle;
}

const NewsCard = ({ card }: NewsCardProps) => {
	const { image, title, created_at, url } = card;

	const createdAt = formatDate(created_at, "d MMMM, yyyy");

	return (
		<div className={s.block}>
			<Link href={url} aria-label={title}>
				<div className={s.imageWrap}>
					<Image
						className={s.image}
						src={image}
						alt={title}
						width={390}
						height={390}
					/>
				</div>
				<div className={s.info}>
					<p className={s.date}>{createdAt}</p>
					<p className={s.title}>{title}</p>
				</div>
			</Link>
		</div>
	);
};

export default NewsCard;
