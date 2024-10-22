"use client";

import Link from "next/link";

import routesConstants from "@/constants/routes";
import { MODAL_ID } from "@/context/modal/constants/constants";
import { useModal } from "@/context/modal/ModalProvider";

import s from "./FooterInfo.module.scss";

import FooterItemWrapper from "../wrapper/FooterItemWrapper";

const FooterInfo = () => {
	const { showModal } = useModal();

	const handleClick = () => {
		showModal({
			modalId: MODAL_ID.FEEDBACK_FORM,
		});
	};

	return (
		<FooterItemWrapper title="Информация" twoColumns>
			<Link className={s.item} href={routesConstants.PROFILE.url}>
				Личный&nbsp;кабинет
			</Link>
			<Link className={s.item} href={routesConstants.NEWS.url}>
				{routesConstants.NEWS.name}
			</Link>
			<button onClick={handleClick} className={s.item}>
				Обратная&nbsp;связь
			</button>
			<Link className={s.item} href={routesConstants.BLOG.url}>
				{routesConstants.BLOG.name}
			</Link>
			<Link className={s.item} href={routesConstants.FAQ.url}>
				{routesConstants.FAQ.name}
			</Link>
		</FooterItemWrapper>
	);
};

export default FooterInfo;
