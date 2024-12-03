/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		formats: ["image/webp"],
		remotePatterns: [
			{
				hostname: "",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;
