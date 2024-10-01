import LogoutButton from "@/components/ui/buttons/logout/LogoutButton";
import ProfileButton from "@/components/ui/buttons/profile/ProfileButton";

import s from "./HeaderProfile.module.scss";

const HeaderProfile = () => {
	return (
		<div className={s.block}>
			<ProfileButton />
			<LogoutButton />
		</div>
	);
};

export default HeaderProfile;
