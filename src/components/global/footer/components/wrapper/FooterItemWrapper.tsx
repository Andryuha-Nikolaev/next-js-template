import type React from "react";

import clsx from "clsx";

import s from "./FooterItemWrapper.module.scss";

interface FooterItemWrapperProps {
	children: React.ReactNode;
	title: string;
	twoColumns?: boolean;
}

const FooterItemWrapper = ({
	children,
	title,
	twoColumns,
}: FooterItemWrapperProps) => {
	return (
		<div className={s.block}>
			<p className={s.title}>{title}</p>
			<div className={clsx(s.content, twoColumns && s.twoColumns)}>
				{children}
			</div>
		</div>
	);
};

export default FooterItemWrapper;
