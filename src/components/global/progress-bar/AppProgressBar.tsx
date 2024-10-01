import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { PROGRESS_BAR_COLOR } from "@/constants/site";

const AppProgressBar = () => {
	return (
		<ProgressBar
			height="4px"
			color={PROGRESS_BAR_COLOR}
			options={{ showSpinner: false }}
			shallowRouting
		/>
	);
};

export default AppProgressBar;
