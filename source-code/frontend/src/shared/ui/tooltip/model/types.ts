export type TooltipProps = {
	onClick?: () => void;
	position?: "right" | "left" | "top";
	mobilePosition?: "rightMobile" | "leftMobile" | "topMobile";
	children?: React.ReactNode;
	type?: "success" | "error" | "question" | "alert";
	message?: string;
	wrapClassName?: string;
	isLoading?: boolean;
};
