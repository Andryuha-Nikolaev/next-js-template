import type { ReactNode } from "react";

export type AccordionProviderProps = {
	openItem: (index: number) => void;
	activeItem: number;
};

export type AccordionProps = {
	children: React.ReactNode;
};

export type AccordionItemProps = {
	question: ReactNode | string;
	children: ReactNode;
	index: number;
};
