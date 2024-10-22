import Image from "next/image";
import Link from "next/link";

import AuctionIcon from "@/icons/auction/AuctionIcon";
import type { IProduct } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

import s from "./ProductCard.module.scss";

import AddToCartButton from "../../buttons/add-to-cart/AddToCartButton";
import Timer from "../../timer/Timer";

interface ProductCardProps {
	card: IProduct;
}

const ProductCard = ({ card }: ProductCardProps) => {
	const {
		title,
		subtitle,
		image,
		// created_at,
		is_auction,
		price,
		url,
		end_date,
	} = card;

	return (
		<div className={s.block}>
			<div className={s.imageWrap}>
				<Image
					className={s.image}
					src={image}
					alt={title}
					width={350}
					height={420}
				/>
				{is_auction && end_date && (
					<div className={s.auctionHeading}>
						<div className={s.auctionIcon}>
							<AuctionIcon />
						</div>

						<Timer endDate={end_date} />
					</div>
				)}
			</div>
			<div className={s.info}>
				<p className={s.title}>{title}</p>
				<p className={s.subtitle}>{subtitle}</p>
				<div className={s.bottom}>
					{!is_auction && (
						<div className={s.cartButton}>
							<AddToCartButton onClick={() => console.log("AddToCart")} />
						</div>
					)}
					<p className={s.price}>{formatPrice(price)}₽</p>
				</div>
			</div>
			<Link aria-label={title} href={url} className={s.wrapLink} />
		</div>
	);
};

export default ProductCard;
