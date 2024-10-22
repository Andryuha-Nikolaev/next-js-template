import clsx from "clsx";
import parse from "html-react-parser";

import type { ICustomPage } from "@/types/custom-page";
import { wrapFiguresInDiv } from "@/utils/wrapFigureInDiv";

import s from "./HtmlContent.module.scss";

interface HtmlContentProps {
	data: ICustomPage;
	variant?: "width-920" | "width-1380";
}

const HtmlContent = ({ data, variant = "width-1380" }: HtmlContentProps) => {
	const {
		data: { text, title },
	} = data;

	return (
		<div className={clsx(s.block, s[variant])}>
			<h1>{parse(title)}</h1>
			<div className={s.content}>{parse(wrapFiguresInDiv(text))}</div>
		</div>
	);
};

export default HtmlContent;
