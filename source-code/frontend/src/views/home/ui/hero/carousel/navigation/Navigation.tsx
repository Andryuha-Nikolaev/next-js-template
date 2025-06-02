import clsx from "clsx";

import { PrevNextButton } from "@/shared/ui/buttons/prev-next";

import s from "./Navigation.module.scss";

type NavigationProps = {
	onPrev: () => void;
	onNext: () => void;
	isVisible: boolean;
	isFirstSlide: boolean;
	isLastSlide: boolean;
	loop: boolean;
};

export const Navigation = ({
	onPrev,
	onNext,
	isVisible,
	isFirstSlide,
	isLastSlide,
	loop,
}: NavigationProps) => {
	return (
		<div className={clsx(s.navigation, isVisible && s.visible)}>
			<div className={clsx(s.prev)}>
				<PrevNextButton
					disabled={!loop && isFirstSlide}
					direction="prev"
					onClick={onPrev}
				/>
			</div>
			<div className={clsx(s.next)}>
				<PrevNextButton
					disabled={!loop && isLastSlide}
					direction="next"
					onClick={onNext}
				/>
			</div>
		</div>
	);
};
