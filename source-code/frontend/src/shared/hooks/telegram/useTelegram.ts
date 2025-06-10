import { useEffect, useState } from "react";

import siteConstants from "$shared/constants/site";

const useTelegram = () => {
	const [webApp, setWebApp] = useState<WebApp | null>(null);

	useEffect(() => {
		if (siteConstants.IS_TELEGRAM_WEB_APP) {
			if (window.Telegram?.WebApp.initData) {
				setWebApp(window.Telegram.WebApp);
			}
		}
	}, []);

	return { webApp };
};

export default useTelegram;
