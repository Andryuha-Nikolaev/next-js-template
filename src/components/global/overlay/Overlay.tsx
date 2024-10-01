import type React from "react";

import clsx from "clsx";

import s from "./Overlay.module.scss";

interface OverlayProps {
	children: React.ReactNode;
	onMouseDown: () => void;
	isShown: boolean;
	className?: string;
}

const Overlay = ({
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

export default Overlay;
