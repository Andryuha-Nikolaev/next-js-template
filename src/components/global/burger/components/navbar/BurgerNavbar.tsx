import Link from "next/link";

import s from "./BurgerNavbar.module.scss";

const BurgerNavbar = () => {
	return (
		<div className={s.block}>
			BurgerNavbar
			<Link href={"/test#form"}>TEST FORM</Link>
		</div>
	);
};

export default BurgerNavbar;
