import { useSiteState } from "@/context/site/SiteStateProvider";
import LogoutIcon from "@/icons/logout/LogoutIcon";

import s from "./LogoutButton.module.scss";

const LogoutButton = () => {
	const { closeBurger } = useSiteState();

	const handleClick = () => {
		closeBurger();
	};

	return (
		<button onClick={handleClick} className={s.button} aria-label="Выйти">
			<LogoutIcon />
		</button>
	);
};

export default LogoutButton;
