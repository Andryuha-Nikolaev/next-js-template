import { RootButton } from "@/shared/ui/buttons/root";
import { Tooltip } from "@/shared/ui/tooltip";

import { TestPageWrapper } from "../wrapper/TestPageWrapper";

export const Tooltips = () => {
	return (
		<TestPageWrapper title="Tooltips">
			<Tooltip message="custom tooltip">
				<RootButton as="span">Custom tooltip</RootButton>
			</Tooltip>
			<Tooltip
				position="left"
				mobilePosition="bottom"
				message="success tooltip"
				type="success"
			/>
			<Tooltip message="error tooltip" type="error" position="top" />
			<Tooltip
				message="alert tooltip"
				type="alert"
				onClick={() => alert("tooltip callback")}
				position="bottom"
				mobilePosition="bottom"
			/>
			<Tooltip message="question tooltip" type="question" />
		</TestPageWrapper>
	);
};
