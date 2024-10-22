import CartIcon from "@/icons/cart/CartIcon";

import s from "./AddToCartButton.module.scss";

interface AddToCartButtonProps {
	onClick: () => void;
}

const AddToCartButton = ({ onClick }: AddToCartButtonProps) => {
	return (
		<button
			aria-label="Добавить в корзину"
			onClick={onClick}
			className={s.button}
		>
			<CartIcon />
		</button>
	);
};

export default AddToCartButton;
