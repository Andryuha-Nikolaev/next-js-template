import { useRef } from "react";

import clsx from "clsx";

import { CloseIcon } from "@/shared/ui/buttons/close/ui/icons/close-icon/CloseIcon";

import s from "./AccordionItem.module.scss";

import type { AccordionItemProps } from "../../model/types";
import { useAccordion } from "../accordion/Accordion";

export const AccordionItem = ({
	question,
	index,
	children,
}: AccordionItemProps) => {
	const { activeItem, openItem } = useAccordion();

	const aRef = useRef<HTMLDivElement>(null);

	const isActive = index === activeItem;

	return (
		<div className={s.block}>
			<button
				className={clsx(s.question, isActive && s.active)}
				onClick={() => openItem(index)}
			>
				<p className={s.qText}>{question}</p>
				<span className={clsx(s.icon, isActive && s.active)}>
					<CloseIcon />
				</span>
			</button>
			<div
				className={s.answer}
				style={{ height: isActive ? aRef.current?.scrollHeight || 0 : 0 }}
			>
				<div ref={aRef} className={s.content}>
					{children}
				</div>
			</div>
		</div>
	);
};
