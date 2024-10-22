const routesConstants = {
	HOME: {
		name: "Главная",
		url: "/",
	},
	CART: {
		name: "Корзина",
		url: "/cart",
	},
	CATALOG: {
		name: "Каталог",
		url: "/catalog",
	},
	DELIVERY: {
		name: "Доставка и оплата",
		url: "/custom-page/dostavka-i-oplata",
	},
	REFUND: {
		name: "Обмен и возврат",
		url: "/refund",
	},
	CONTACTS: {
		name: "Контакты",
		url: "/contacts",
	},
	NEWS: {
		name: "Новости",
		url: "/news",
	},
	BLOG: {
		name: "Блог",
		url: "/blog",
	},
	FAQ: {
		name: "FAQ",
		url: "/#faq",
	},
	PROFILE: {
		name: "Личный кабинет",
		url: "/profile",
	},
	TEST: {
		name: "Тест",
		url: "/test",
		metaTitle: "Тест",
	},
} as const;

export default routesConstants;
