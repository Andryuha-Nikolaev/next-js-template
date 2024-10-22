import Link from "next/link";

import routesConstants from "@/constants/routes";
import { useSiteState } from "@/context/site/SiteStateProvider";
import CartIcon from "@/icons/cart/CartIcon";

import s from "./CartButton.module.scss";

const CartButton = () => {
	const { closeBurger } = useSiteState();

	const handleClick = () => {
		closeBurger();
	};

	return (
		<Link
			onClick={handleClick}
			className={s.button}
			aria-label={routesConstants.CART.name}
			href={routesConstants.CART.url}
		>
			<CartIcon />
		</Link>
	);
};

export default CartButton;
