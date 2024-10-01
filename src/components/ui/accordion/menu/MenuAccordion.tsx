import { Accordion, AccordionItem } from "@nextui-org/accordion";
import clsx from "clsx";
import Link from "next/link";

import PolygonIcon from "@/icons/polygon/PolygonIcon";
import type { IMenuAccordionItem } from "@/types/accordion";

import s from "./MenuAccordion.module.scss";

interface MenuAccordionProps {
	menu: IMenuAccordionItem[];
	titleFontSize?: 12 | 14;
	columns?: 1 | 2;
}

const MenuAccordion = ({
	menu,
	titleFontSize = 14,
	columns = 1,
}: MenuAccordionProps) => {
	return (
		<div className={s.block}>
			<Accordion
				className={s.accordion}
				itemClasses={{
					titleWrapper: s.titleWrapper,
					title: [s.title, s[`title_size-${titleFontSize}`]],
					heading: s.heading,
					trigger: s.trigger,
					content: s.content,
					base: s.base,
					indicator: [
						"data-[open=true]:rotate-180 rtl:data-[open=true]:rotate-180",
						s.indicator,
					],
				}}
			>
				{menu.map((item, i) => (
					<AccordionItem
						HeadingComponent={"span"}
						key={`accordion-${item.title}-${i}`}
						aria-label={item.title}
						title={item.title}
						indicator={<PolygonIcon />}
					>
						<nav>
							<ul
								className={clsx(
									s.contentWrapper,
									s[`contentWrapper_columns-${columns}`]
								)}
							>
								{item.categories.map((item) => (
									<li className={s.item} key={`accordion-link-${item.url}`}>
										<Link className={s.link} href={item.url}>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default MenuAccordion;
