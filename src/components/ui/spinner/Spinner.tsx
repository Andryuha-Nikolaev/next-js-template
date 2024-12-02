import clsx from "clsx";

import s from "./Spinner.module.scss";

interface SpinnerProps {
	className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
	return <span className={clsx(s.spinner, className && className)} />;
};

export default Spinner;
