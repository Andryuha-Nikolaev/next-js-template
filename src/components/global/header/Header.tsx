"use client";

import { useContext } from "react";

import clsx from "clsx";

import ContentLayout from "@/components/layouts/content/ContentLayout";
import { ModalContext } from "@/components/providers/modal/ModalProvider";

import HeaderCart from "./cart/HeaderCart";
import HeaderLogo from "./components/logo/HeaderLogo";
import s from "./Header.module.scss";

import { MODAL_ID } from "../modal/constants/constants";

interface HeaderProps {
	isFixed?: boolean;
}

const Header = ({ isFixed = true }: HeaderProps) => {
	const { showModal } = useContext(ModalContext);

	const handleClick = () => {
		console.log("aaaaaaa");

		showModal({
			modalId: MODAL_ID.DEFAULT,
			title: "aaaaaaaaaa",
		});
	};

	return (
		<header className={clsx(s.header, isFixed && s.header_fixed)}>
			<ContentLayout>
				<div className={clsx(s.block)}>
					<HeaderLogo />
					<div>navbar</div>
					<button onClick={handleClick}>aaaaaaaaaaaaaaaaaaaa</button>
					<div className={clsx(s.buttons)}>
						<HeaderCart />
					</div>
				</div>
			</ContentLayout>
		</header>
	);
};

export default Header;
