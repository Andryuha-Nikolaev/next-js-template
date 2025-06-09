"use client";

import { createContext, useContext, useState } from "react";

import s from "./Accordion.module.scss";

import type { AccordionProps, AccordionProviderProps } from "../../model/types";

const AccordionContext = createContext<AccordionProviderProps | undefined>(
	undefined
);

export const Accordion = ({ children }: AccordionProps) => {
	const [activeItem, setActiveItem] = useState<number>(-1);

	const openItem = (index: number) => {
		if (activeItem === index) {
			setActiveItem(-1);
		} else {
			setActiveItem(index);
		}
	};

	return (
		<AccordionContext.Provider value={{ openItem, activeItem }}>
			<div className={s.block}>{children}</div>
		</AccordionContext.Provider>
	);
};

export const useAccordion = () => {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error("useAccordionContext must be used within an Accordion");
	}
	return context;
};
