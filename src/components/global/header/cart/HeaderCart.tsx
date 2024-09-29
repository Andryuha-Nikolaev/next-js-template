"use client";

import clsx from "clsx";
import Link from "next/link";

import routesConstants from "@/constants/routes";

import s from "./HeaderCart.module.scss";

const HeaderCart = () => {
	const cartCount = 0;

	return (
		<Link
			href={routesConstants.CART.url}
			aria-label={routesConstants.CART.name}
		>
			<div className={s.block}>
				<div className={clsx(s.count, cartCount === 0 && s.count_empty)}>
					{cartCount}
				</div>
			</div>
		</Link>
	);
};

export default HeaderCart;
