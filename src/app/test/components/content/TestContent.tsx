"use client";

import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

import CloseIcon from "@/components/icons/close/CloseIcon";
import ContentLayout from "@/components/layouts/content/ContentLayout";
import RootButton from "@/components/ui/buttons/root/RootButton";

import s from "./TestContent.module.scss";

const TestContent = () => {
	const router = useRouter();

	return (
		<div className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<h1>TEST</h1>
					<RootButton onClick={() => router.push("/")}>
						nextjs-toploader push HOME
					</RootButton>
					<RootButton onClick={() => console.log("aaaaaaaaaaaaaa")}>
						Root Button
					</RootButton>
					<RootButton colorVariant="var2">Root Button var2</RootButton>
					<RootButton colorVariant="var3">Root Button var3</RootButton>
					<RootButton size="sm">Root Button sm</RootButton>
					<RootButton size="md">Root Button md</RootButton>
					<RootButton size="lg">Root Button lg</RootButton>
					<RootButton disabled>Root Button disabled</RootButton>
					<RootButton href={"/"} as={Link}>
						Root Button as Next Link to home
					</RootButton>
					<RootButton isLoading>Root Button Loading</RootButton>
					<RootButton colorVariant="var2" size="sm" isLoading>
						Root Button Loading
					</RootButton>

					<RootButton Icon={<CloseIcon />} colorVariant="var3">
						Root Button With Icon
					</RootButton>
					<RootButton
						Icon={<CloseIcon />}
						iconPosition="right"
						size="sm"
						colorVariant="var2"
					>
						Root Button With Icon Right
					</RootButton>
					<Link href={"/"}>Link-1</Link>
				</div>
			</ContentLayout>
		</div>
	);
};

export default TestContent;
