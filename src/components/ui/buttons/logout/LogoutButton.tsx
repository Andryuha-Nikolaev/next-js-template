import LogoutIcon from "@/icons/logout/LogoutIcon";

import s from "./LogoutButton.module.scss";

const LogoutButton = () => {
	return (
		<button className={s.button} aria-label="Выйти">
			<LogoutIcon />
		</button>
	);
};

export default LogoutButton;
