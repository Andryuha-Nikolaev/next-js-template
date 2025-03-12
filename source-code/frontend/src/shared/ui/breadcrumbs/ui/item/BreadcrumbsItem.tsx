import clsx from "clsx";
import Link from "next/link";

import s from "./BreadcrumbsItem.module.scss";

import type { Breadcrumb } from "../../model/types";

type BreadcrumbsItemProps = Breadcrumb & {
	index: number;
};

export const BreadcrumbsItem = ({ index, name, url }: BreadcrumbsItemProps) => {
	return (
		<li
			itemProp="itemListElement"
			itemScope
			itemType="http://schema.org/ListItem"
			className={s.item}
		>
			<span className={s.separator}>/</span>
			<Link className={clsx(s.link)} href={url} itemProp="url">
				<span itemProp="name">{name}</span>
			</Link>
			<meta itemProp="position" content={(index + 1).toString()} />
		</li>
	);
};
