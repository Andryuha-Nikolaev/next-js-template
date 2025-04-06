import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

import { RootButton } from "@/shared/ui/buttons/root";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const Buttons = () => {
	const router = useRouter();

	return (
		<TestPageWrapper title="Buttons">
			<RootButton onClick={() => console.log("click")}>
				Root Button var1
			</RootButton>
			<RootButton colorVariant="var2">Root Button var2</RootButton>
			<RootButton colorVariant="var3">Root Button var3</RootButton>

			<RootButton size="sm">Root Button sm</RootButton>
			<RootButton size="md">Root Button md</RootButton>
			<RootButton size="lg">Root Button lg</RootButton>
			<RootButton disabled>Root Button disabled</RootButton>
			<RootButton isLoading>Root Button loading</RootButton>
			<RootButton colorVariant="var2" size="sm" isLoading>
				Root Button var2 Loading
			</RootButton>
			<RootButton onClick={() => router.push("/")}>
				Home (nextjs-toploader router push)
			</RootButton>
			<RootButton href={"/"} as={Link}>
				Home (as Next Link)
			</RootButton>
			<RootButton
				Icon={
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							d="M20 4 4 20M4 4l16 16"
						></path>
					</svg>
				}
				colorVariant="var3"
			>
				Root Button with icon
			</RootButton>
			<RootButton
				Icon={
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							d="M20 4 4 20M4 4l16 16"
						></path>
					</svg>
				}
				iconPosition="right"
				size="sm"
				colorVariant="var2"
			>
				Root Button with icon right
			</RootButton>
		</TestPageWrapper>
	);
};
