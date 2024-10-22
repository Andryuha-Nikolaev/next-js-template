import s from "./FooterBottom.module.scss";

const FooterBottom = () => {
	return (
		<div className={s.block}>
			<div className={s.links}>
				<a className={s.link} href="/policy" rel="noreferrer" target="_blank">
					Политика конфиденциальности
				</a>
				<a className={s.link} href="/rules" rel="noreferrer" target="_blank">
					Условия использования сервиса
				</a>
			</div>
			<div className={s.payments}>
				{Array(3)
					.fill("payment")
					.map((_, i) => (
						<div className={s.payment} key={`footer-payment-${i}`} />
					))}
			</div>
		</div>
	);
};

export default FooterBottom;
