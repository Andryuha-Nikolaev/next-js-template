"use client";

import clsx from "clsx";

import ContentLayout from "@/components/layouts/content/ContentLayout";

// import { MODAL_ID } from "@/context/modal/constants/constants";
// import { useModal } from "@/context/modal/ModalProvider";

import HeaderButtons from "./components/buttons/HeaderButtons";
import HeaderLogo from "./components/logo/HeaderLogo";
import HeaderNavbar from "./components/navbar/HeaderNavbar";
import s from "./Header.module.scss";

interface HeaderProps {
	isFixed?: boolean;
}

const Header = ({ isFixed = true }: HeaderProps) => {
	// const { showModal } = useModal();

	// const handleClick = () => {
	// 	showModal({
	// 		modalId: MODAL_ID.DEFAULT,
	// 		title: "aaaaaaaaaa",
	// 	});
	// };

	return (
		<header className={clsx(s.header, isFixed && s.header_fixed)}>
			<ContentLayout>
				{/* <div onClick={handleClick}>aaa</div> */}
				<div className={s.line} />
				<div className={clsx(s.block)}>
					<HeaderLogo />
					<HeaderNavbar />
					<HeaderButtons />
				</div>
			</ContentLayout>
		</header>
	);
};

export default Header;
