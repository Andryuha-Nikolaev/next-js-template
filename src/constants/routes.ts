const routesConstants = {
	HOME: {
		name: "Главная",
		url: "/",
	},
	CART: {
		name: "Корзина",
		url: "/cart",
	},
	TEST: {
		name: "Тест",
		url: "/test",
		metaTitle: "Тест",
	},
} as const;

export default routesConstants;
