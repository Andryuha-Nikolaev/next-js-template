import routesConstants from "@/constants/routes";
import { useSiteState } from "@/context/site/SiteStateProvider";
import ProfileIcon from "@/icons/profile/ProfileIcon";

import s from "./ProfileButton.module.scss";

const ProfileButton = () => {
	const { closeBurger } = useSiteState();

	const handleClick = () => {
		closeBurger();
	};

	return (
		<button
			onClick={handleClick}
			aria-label={routesConstants.PROFILE.name}
			className={s.button}
		>
			<ProfileIcon />
		</button>
	);
};

export default ProfileButton;
