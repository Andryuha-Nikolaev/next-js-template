import type { IMenuAccordionItem } from "@/types/accordion";

import routesConstants from "./routes";

export const PROGRESS_BAR_COLOR = "#ff4a4a";

export const navbar: IMenuAccordionItem[] = [
	{
		title: "Покупателям",
		categories: [
			{
				name: routesConstants.DELIVERY.name,
				url: routesConstants.DELIVERY.url,
			},
			{
				name: routesConstants.REFUND.name,
				url: routesConstants.REFUND.url,
			},
			{
				name: routesConstants.CONTACTS.name,
				url: routesConstants.CONTACTS.url,
			},
		],
	},
];
