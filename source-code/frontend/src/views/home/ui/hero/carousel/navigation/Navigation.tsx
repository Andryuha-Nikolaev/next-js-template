import clsx from "clsx";

import { PrevNextButton } from "@/shared/ui/buttons/prev-next";

import s from "./Navigation.module.scss";

type NavigationProps = {
	onPrev: () => void;
	onNext: () => void;
	isVisible: boolean;
};

export const Navigation = ({ onPrev, onNext, isVisible }: NavigationProps) => {
	return (
		<div className={clsx(s.navigation, isVisible && s.visible)}>
			<div className={clsx(s.prev)}>
				<PrevNextButton direction="prev" onClick={onPrev} />
			</div>
			<div className={clsx(s.next)}>
				<PrevNextButton direction="next" onClick={onNext} />
			</div>
		</div>
	);
};
