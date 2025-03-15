type Position = "right" | "left" | "top" | "bottom";

export type TooltipProps = {
	onClick?: () => void;
	position?: Position;
	mobilePosition?: Position;
	children?: React.ReactNode;
	type?: "success" | "error" | "question" | "alert";
	message?: string;
	wrapClassName?: string;
	isLoading?: boolean;
};
