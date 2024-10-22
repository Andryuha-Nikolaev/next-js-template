import clsx from "clsx";
import Link from "next/link";

import type { IBreadcrumb } from "@/types/breadcrumbs";

import s from "./BreadcrumbsItem.module.scss";

interface BreadcrumbsItemProps extends IBreadcrumb {
	index: number;
}

const BreadcrumbsItem = ({ index, name, url }: BreadcrumbsItemProps) => {
	return (
		<li
			itemProp="itemListElement"
			itemScope
			itemType="http://schema.org/ListItem"
			className={s.item}
		>
			<span className={s.separator}>/</span>
			<Link className={clsx(s.link)} href={url} itemProp="item">
				<span itemProp="name">{name}</span>
			</Link>

			<meta itemProp="position" content={(index + 1).toString()} />
		</li>
	);
};

export default BreadcrumbsItem;
