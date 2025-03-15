type AsProp<C extends React.ElementType> = {
	as?: C;
};

type PropsToElement<C extends React.ElementType, P> = P &
	AsProp<C> &
	Omit<React.ComponentProps<C>, keyof AsProp<C> | keyof P>;

export type RootLinkProps<C extends React.ElementType> = PropsToElement<
	C,
	{
		children: React.ReactNode;

		colorVariant?: "var1" | "var2" | "var3";
	}
>;
