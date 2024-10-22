import Image from "next/image";
import Link from "next/link";

import RootButton from "@/components/ui/buttons/root/RootButton";
import routesConstants from "@/constants/routes";

import image from "./images/image.jpg";
import s from "./MenuRight.module.scss";

const MenuRight = () => {
	return (
		<div className={s.block}>
			<Image className={s.image} src={image} alt="" />

			<Link className={s.button} href={routesConstants.CATALOG.url}>
				<RootButton as="div" colorVariant="var2">
					Открыть весь каталог
				</RootButton>
			</Link>
		</div>
	);
};

export default MenuRight;
