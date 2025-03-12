import Link from "next/link";

import routesConstants from "@/shared/constants/routes";
import { ContentLayout } from "@/shared/layouts/content-layout";
import { RootButton } from "@/shared/ui/buttons/root";

import s from "./ErrorPage.module.scss";

import type { ErrorPageProps } from "../model/types";

export const ErrorPage = ({ code, title, subtitle }: ErrorPageProps) => {
	return (
		<div className={s.block}>
			<ContentLayout>
				<div className={s.wrap}>
					<p className={s.code}>Ошибка {code && code}</p>
					<h1 className={s.title}>{title}</h1>
					<p className={s.subtitle}>{subtitle}</p>
					<div className={s.btnWrap}>
						<RootButton as={Link} href={routesConstants.HOME.url}>
							На главную
						</RootButton>
					</div>
				</div>
			</ContentLayout>
		</div>
	);
};
