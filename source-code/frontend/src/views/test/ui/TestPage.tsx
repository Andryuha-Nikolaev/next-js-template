"use client";

import { TestForm } from "$features/send-test-form";

import { TestAccordion } from "./accordion/TestAccordion";
import { Buttons } from "./buttons/Buttons";
import { Links } from "./links/Links";
import { TestPagination } from "./pagination/TestPagination";
import ShakeDetector from "./shake-detector/ShakeDetector";
import { SocialMedia } from "./social-media/SocialMedia";
import { TestBreadcrumbs } from "./test-breadcrumbs/TestBreadcrumbs";
import { TestModal } from "./test-modal/TestModal";
import { Tooltips } from "./tooltips/Tooltips";
import { Typography } from "./typography/Typography";
import { TestPageWrapper } from "./wrapper/TestPageWrapper";

export const TestPage = () => {
	return (
		<>
			<ShakeDetector />
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
			<TestAccordion />
			<TestPagination />
		</>
	);
};
