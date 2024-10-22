"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import parse from "html-react-parser";

import PlusIcon from "@/icons/plus/PlusIcon";
import type { IFaqAccordionItem } from "@/types/faq";

import s from "./FaqAccordion.module.scss";

interface FaqAccordionProps {
	data: IFaqAccordionItem[];
}

const FaqAccordion = ({ data }: FaqAccordionProps) => {
	return (
		<div className={s.block}>
			<Accordion
				variant="splitted"
				className={s.accordion}
				itemClasses={{
					titleWrapper: s.titleWrapper,
					title: s.title,
					heading: s.heading,
					trigger: s.trigger,
					content: s.content,
					base: s.base,
					indicator: [s.indicator],
				}}
			>
				{data.map((item, i) => (
					<AccordionItem
						HeadingComponent={"span"}
						key={`faq-accordion-${item.question}-${i}`}
						aria-label={item.question}
						title={parse(item.question)}
						indicator={<PlusIcon />}
					>
						<p>{parse(item.answer)}</p>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FaqAccordion;
