export type TooltipProps = {
	onClick?: () => void;
	position?: "right" | "left";
	mobilePosition?: "rightMobile" | "leftMobile";
	children?: React.ReactNode;
	type?: "success" | "error" | "question" | "alert";
	message?: string;
	wrapClassName?: string;
	isLoading?: boolean;
};
