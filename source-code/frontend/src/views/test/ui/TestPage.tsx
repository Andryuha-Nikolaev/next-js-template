"use client";

import { TestForm } from "@/features/send-test-form";

import { Buttons } from "./buttons/Buttons";
import { Links } from "./links/Links";
import { SocialMedia } from "./social-media/SocialMedia";
import { TestBreadcrumbs } from "./test-breadcrumbs/TestBreadcrumbs";
import { TestModal } from "./test-modal/TestModal";
import { Tooltips } from "./tooltips/Tooltips";
import { Typography } from "./typography/Typography";
import { TestPageWrapper } from "./wrapper/TestPageWrapper";

export const TestPage = () => {
	return (
		<>
			<Typography />
			<TestPageWrapper title="Form">
				<TestForm />
			</TestPageWrapper>
			<Buttons />
			<Links />
			<SocialMedia />
			<TestModal />
			<Tooltips />
			<TestBreadcrumbs />
		</>
	);
};
