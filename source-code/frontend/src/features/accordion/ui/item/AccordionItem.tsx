"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { CloseIcon } from "$shared/ui/buttons/close/ui/icons/close-icon/CloseIcon";

import s from "./AccordionItem.module.scss";

import type { AccordionItemProps } from "../../model/types";
import { useAccordion } from "../accordion/Accordion";

export const AccordionItem = ({
	question,
	index,
	children,
}: AccordionItemProps) => {
	const { activeItem, openItem } = useAccordion();
	const [targetHeight, setTargetHeight] = useState<number | "auto">(0);

	const aRef = useRef<HTMLDivElement>(null);

	const isActive = index === activeItem;

	useEffect(() => {
		if (!aRef.current) return;

		const height = aRef.current.scrollHeight;
		let timer;

		if (isActive) {
			setTargetHeight(height);
			timer = setTimeout(() => {
				setTargetHeight("auto");
			}, 300);
		} else {
			setTargetHeight(height);
			timer = setTimeout(() => {
				setTargetHeight(0);
			}, 10);
		}

		return () => clearTimeout(timer);
	}, [isActive]);

	return (
		<div className={s.block}>
			<button
				className={clsx(s.question, isActive && s.active)}
				onClick={() => openItem(index)}
			>
				<span className={s.qText}>{question}</span>
				<span className={clsx(s.icon, isActive && s.active)}>
					<CloseIcon />
				</span>
			</button>
			<div className={s.answer} style={{ height: targetHeight }}>
				<div ref={aRef} className={s.content}>
					{children}
				</div>
			</div>
		</div>
	);
};
