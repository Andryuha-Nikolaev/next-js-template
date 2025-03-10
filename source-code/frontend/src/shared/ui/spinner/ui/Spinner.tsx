import clsx from "clsx";

import s from "./Spinner.module.scss";

type SpinnerProps = {
	className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
	return <span className={clsx(s.spinner, className && className)} />;
};
