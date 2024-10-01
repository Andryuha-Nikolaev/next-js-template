import routesConstants from "@/constants/routes";
import ProfileIcon from "@/icons/profile/ProfileIcon";

import s from "./ProfileButton.module.scss";

const ProfileButton = () => {
	return (
		<button aria-label={routesConstants.PROFILE.name} className={s.button}>
			<ProfileIcon />
		</button>
	);
};

export default ProfileButton;
