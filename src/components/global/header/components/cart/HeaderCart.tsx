"use client";

import clsx from "clsx";

import CartButton from "@/components/ui/buttons/cart/CartButton";

import s from "./HeaderCart.module.scss";

const HeaderCart = () => {
	const cartCount = 0;

	return (
		<div className={s.block}>
			<div className={clsx(s.count, cartCount === 0 && s.count_empty)}>
				{cartCount}
			</div>
			<CartButton />
		</div>
	);
};

export default HeaderCart;
