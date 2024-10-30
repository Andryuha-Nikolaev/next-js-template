import TgIcon from "@/components/icons/social/TgIcon";
import VkIcon from "@/components/icons/social/VkIcon";

import s from "./Social.module.scss";

interface SocialArrayItem {
	name: string;
	url: string;
	Icon: () => JSX.Element;
}

const socialArray: SocialArrayItem[] = [
	{ name: "tg", url: "https://t.me/", Icon: TgIcon },
	{ name: "vk", url: "https://vk.com/", Icon: VkIcon },
];

const Social = () => {
	return (
		<div className={s.block}>
			{socialArray.map((item, i) => (
				<a
					key={i}
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

export default Social;
