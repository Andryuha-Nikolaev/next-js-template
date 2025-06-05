import { RootLink } from "$shared/ui/links/root";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const Links = () => {
	return (
		<TestPageWrapper title="Links">
			<RootLink as={"button"}>RootLink as=button</RootLink>
			<RootLink href={"/test/aaa"}>RootLink var1 to dynamic route</RootLink>
			<RootLink colorVariant="var2" href={"/"}>
				RootLink var2
			</RootLink>
			<RootLink href="/" as="a">
				RootLink as=a
			</RootLink>
		</TestPageWrapper>
	);
};
