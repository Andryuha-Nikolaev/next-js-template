type AsProp<C extends React.ElementType> = {
	as?: C;
};

type PropsToElement<C extends React.ElementType, P> = P &
	AsProp<C> &
	Omit<React.ComponentProps<C>, keyof AsProp<C> | keyof P>;

type RootLinkProps<C extends React.ElementType> = PropsToElement<
	C,
	{
		children: React.ReactNode;
	}
>;

const RootLink = <C extends React.ElementType = "button">({
	as,
	children,
	...restProps
}: RootLinkProps<C>) => {
	const Component = as || "button";
	return <Component {...restProps}>{children}</Component>;
};

export default RootLink;
