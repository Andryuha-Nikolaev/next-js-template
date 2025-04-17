import TgIcon from "./icons/tg-icon/TgIcon";
import VkIcon from "./icons/vk-icon/VkIcon";
import s from "./Social.module.scss";

import type { SocialArrayItem } from "../model/types";

const socialArray: SocialArrayItem[] = [
	{ name: "tg", url: "https://t.me/", Icon: TgIcon },
	{ name: "vk", url: "https://vk.com/", Icon: VkIcon },
];

export const Social = () => {
	return (
		<div className={s.block}>
			{socialArray.map((item) => (
				<a
					key={item.name}
					className={s.link}
					href={item.url}
					rel="noreferrer nofollow"
					target="_blank"
					aria-label={item.name}
				>
					{<item.Icon />}
				</a>
			))}
		</div>
	);
};
