export const isProd = () => {
	const isProd =
		process.env.NEXT_PUBLIC_BUILD_PROFILE === "production" ||
		process.env.NEXT_PUBLIC_BUILD_PROFILE === "prod";

	return isProd;
};
