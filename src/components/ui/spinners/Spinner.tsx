import clsx from "clsx";

import s from "./Spinner.module.scss";

interface ISpinner {
	className?: string;
}

const Spinner = ({ className }: ISpinner) => {
	return <span className={clsx(s.spinner, className && className)} />;
};

export default Spinner;
