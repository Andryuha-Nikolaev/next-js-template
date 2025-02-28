import clsx from "clsx";

import s from "./RootButton.module.scss";

import Spinner from "../../spinner/Spinner";

type AsProp<C extends React.ElementType> = {
	as?: C;
};

type PropsToElement<C extends React.ElementType, P> = P &
	AsProp<C> &
	Omit<React.ComponentProps<C>, keyof AsProp<C> | keyof P>;

type RootButtonProps<C extends React.ElementType> = PropsToElement<
	C,
	{
		children: React.ReactNode;
		colorVariant?: "var1" | "var2" | "var3";
		size?: "sm" | "md" | "lg";
		isLoading?: boolean;
		Icon?: React.ReactNode;
		iconPosition?: "left" | "right";
	}
>;

const RootButton = <C extends React.ElementType = "button">({
	as,
	children,
	className,
	colorVariant = "var1",
	size = "md",
	isLoading,
	Icon,
	iconPosition = "left",
	...restProps
}: RootButtonProps<C>) => {
	const buttonContent = (
		<>
			{isLoading && (
				<span className={s.spinner}>
					<Spinner />
				</span>
			)}
			{Icon && <span className={clsx(s.icon, s[iconPosition])}>{Icon}</span>}
			{children}
		</>
	);

	const Component = as || "button";
	return (
		<Component
			className={clsx(
				s.button,
				s[colorVariant],
				s[size],
				isLoading && s.loading,
				className && className
			)}
			{...(Component === "button" && { type: "button" })}
			{...restProps}
		>
			{buttonContent}
		</Component>
	);
};

export default RootButton;
