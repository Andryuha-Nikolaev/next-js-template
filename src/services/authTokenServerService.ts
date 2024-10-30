import { cookies } from "next/headers";

import { EnumTokens } from "./authTokenService";

export const getAccessTokenServer = () => {
	const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value;
	return accessToken || null;
};
