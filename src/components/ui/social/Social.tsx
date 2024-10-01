import clsx from "clsx";

import TgIcon from "@/icons/tg/TgIcon";
import VkIcon from "@/icons/vk/VkIcon";

import s from "./Social.module.scss";

interface SocialProps {
	background?: "light" | "dark";
}

const Social = ({ background = "light" }: SocialProps) => {
	return (
		<div className={s.block}>
			<a
				className={clsx(s.link, s[background])}
				href="/#"
				rel="noreferrer nofollow"
				target="_blank"
				aria-label="tg"
			>
				<TgIcon />
			</a>
			<a
				className={clsx(s.link, s[background])}
				href="/#"
				rel="noreferrer nofollow"
				target="_blank"
				aria-label="vk"
			>
				<VkIcon />
			</a>
		</div>
	);
};

export default Social;
