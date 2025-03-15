import clsx from "clsx";

import s from "./Overlay.module.scss";

import type { OverlayProps } from "../model/types";

export const Overlay = ({
	children,
	isShown,
	onMouseDown,
	className,
}: OverlayProps) => {
	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div
			onMouseDown={onMouseDown}
			className={clsx(s.overlay, !!isShown && s.open, className && className)}
		>
			{children}
		</div>
	);
};
