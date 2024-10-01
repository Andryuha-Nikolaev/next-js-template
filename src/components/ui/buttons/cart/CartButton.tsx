import Link from "next/link";

import routesConstants from "@/constants/routes";
import CartIcon from "@/icons/cart/CartIcon";

import s from "./CartButton.module.scss";

const CartButton = () => {
	return (
		<Link
			className={s.button}
			aria-label={routesConstants.CART.name}
			href={routesConstants.CART.url}
		>
			<CartIcon />
		</Link>
	);
};

export default CartButton;
