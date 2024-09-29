import type React from "react";

import clsx from "clsx";

import s from "./Overlay.module.scss";

interface OverlayProps {
	children: React.ReactNode;
	onMouseDown: () => void;
	isShown: boolean;
}

const Overlay = ({ children, isShown, onMouseDown }: OverlayProps) => {
	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div
			onMouseDown={onMouseDown}
			className={clsx(s.overlay, !!isShown && s.open)}
		>
			{children}
		</div>
	);
};

export default Overlay;
