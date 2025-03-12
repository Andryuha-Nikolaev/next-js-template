import { useState } from "react";

import clsx from "clsx";
import parse from "html-react-parser";

import AlertIcon from "./icons/alert/AlertIcon";
import ErrorIcon from "./icons/error/ErrorIcon";
import QuestionIcon from "./icons/question/QuestionIcon";
import SuccessIcon from "./icons/success/SuccessIcon";
import TriangleIcon from "./icons/triangle/TriangleIcon";
import s from "./Tooltip.module.scss";

import { Spinner } from "../../spinner";
import type { TooltipProps } from "../model/types";

const Icons = {
	error: ErrorIcon,
	success: SuccessIcon,
	question: QuestionIcon,
	alert: AlertIcon,
};

export const Tooltip = ({
	onClick = () => {},
	position = "right",
	mobilePosition = "top",
	children,
	type,
	message,
	wrapClassName,
	isLoading,
}: TooltipProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const Icon = type ? Icons[type] : null;

	if (!message) {
		return null;
	}

	return (
		<div
			onMouseMove={() => {
				setIsOpen(true);
			}}
			onMouseLeave={() => setIsOpen(false)}
			className={clsx(s.wrap, wrapClassName)}
		>
			{isLoading && (
				<div className={s.spinner}>
					<Spinner />
				</div>
			)}
			<button
				disabled={isLoading}
				aria-label="Подсказка"
				onMouseDown={() => {
					if (isOpen) {
						onClick();
					}
				}}
				type="button"
				className={s.button}
			>
				{children}
				{Icon && (
					<span className={s.icon}>
						<Icon />
					</span>
				)}
			</button>
			{message && (
				<div
					className={clsx(
						s.popup,
						s[`${mobilePosition}Mobile`],
						s[position],
						isOpen && s.open
					)}
				>
					<div className={s.triangle}>
						<TriangleIcon />
					</div>
					<p className={s.message}>{parse(message)}</p>
				</div>
			)}
		</div>
	);
};
