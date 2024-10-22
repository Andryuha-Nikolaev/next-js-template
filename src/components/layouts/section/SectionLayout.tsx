import type React from "react";

import clsx from "clsx";
import parse from "html-react-parser";

import SectionLayoutLink from "./components/link/SectionLayoutLink";
import s from "./SectionLayout.module.scss";

import ContentLayout from "../content/ContentLayout";

interface SectionLayoutProps {
	children: React.ReactNode;
	id?: string;
	title: string;
	button?: {
		text: string;
		link: string;
	};
}

const SectionLayout = ({ children, id, title, button }: SectionLayoutProps) => {
	return (
		<section id={id} className={clsx(s.block)}>
			<ContentLayout>
				<div className={s.heading}>
					<h2 className={s.title}>{parse(title)}</h2>
					{button && <SectionLayoutLink showIn="desk" button={button} />}
				</div>
			</ContentLayout>
			{children}
			{button && (
				<ContentLayout>
					<SectionLayoutLink showIn="mob" button={button} />
				</ContentLayout>
			)}
		</section>
	);
};

export default SectionLayout;
