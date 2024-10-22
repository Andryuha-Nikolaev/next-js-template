import clsx from "clsx";
import Link from "next/link";

import MenuButton from "@/components/ui/buttons/menu/MenuButton";
import RootPopover from "@/components/ui/popover/RootPopover";
import routesConstants from "@/constants/routes";
import { navbar } from "@/constants/site";
import { useSiteState } from "@/context/site/SiteStateProvider";
import PolygonIcon from "@/icons/polygon/PolygonIcon";

import s from "./HeaderNavbar.module.scss";

const HeaderNavbar = () => {
	const { closeBurger } = useSiteState();

	return (
		<div className={s.block}>
			<MenuButton />
			<Link
				onClick={closeBurger}
				className={s.link}
				href={routesConstants.NEWS.url}
			>
				{routesConstants.NEWS.name}
			</Link>
			<Link
				onClick={closeBurger}
				className={s.link}
				href={routesConstants.FAQ.url}
			>
				{routesConstants.FAQ.name}
			</Link>
			<RootPopover
				trigger={
					<button className={s.trigger} type="button">
						Покупателям
						<span>
							<PolygonIcon />
						</span>
					</button>
				}
			>
				<nav>
					<ul className={s.contentWrapper}>
						{navbar[0].categories.map((item) => (
							<li className={s.item} key={`popover-link-${item.url}`}>
								<Link
									onClick={closeBurger}
									className={clsx(s.link, s.small)}
									href={item.url}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</RootPopover>
		</div>
	);
};

export default HeaderNavbar;
