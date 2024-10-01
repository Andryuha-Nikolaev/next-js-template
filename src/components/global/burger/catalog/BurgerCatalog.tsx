import Link from "next/link";

import MenuAccordion from "@/components/ui/accordion/menu/MenuAccordion";
import routesConstants from "@/constants/routes";
import { categories } from "@/data/categories";

import s from "./BurgerCatalog.module.scss";

const BurgerCatalog = () => {
	return (
		<div className={s.block}>
			<p className={s.title}>Каталог</p>
			<MenuAccordion columns={2} titleFontSize={12} menu={categories} />
			<Link className={s.link} href={routesConstants.CATALOG.url}>
				Открыть весь каталог
			</Link>
		</div>
	);
};

export default BurgerCatalog;
