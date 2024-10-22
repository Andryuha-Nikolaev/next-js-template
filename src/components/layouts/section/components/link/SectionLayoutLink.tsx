import clsx from "clsx";
import Link from "next/link";

import RootButton from "@/components/ui/buttons/root/RootButton";

import s from "./SectionLayoutLink.module.scss";

interface SectionLayoutLinkProps {
	showIn: "mob" | "desk";
	button: {
		text: string;
		link: string;
	};
}

const SectionLayoutLink = ({ button, showIn }: SectionLayoutLinkProps) => {
	return (
		<Link href={button.link} className={clsx(s.link, s[showIn])}>
			<RootButton colorVariant="var2" as="div">
				{button.text}
			</RootButton>
		</Link>
	);
};

export default SectionLayoutLink;
