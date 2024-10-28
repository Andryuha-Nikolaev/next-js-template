import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import siteConstants from "@/constants/site";

const AppProgressBar = () => {
	return (
		<ProgressBar
			height="4px"
			color={siteConstants.PROGRESS_BAR_COLOR}
			options={{ showSpinner: false }}
			shallowRouting
		/>
	);
};

export default AppProgressBar;
