import { NextResponse } from "next/server";

import { EnumTokens } from "@/services/authTokenService";
import { isProd } from "@/utils/environment/isProd";

// eslint-disable-next-line @typescript-eslint/require-await
export async function POST() {
	if (isProd()) {
		return NextResponse.json(
			{ error: "Resource not found." },
			{
				status: 404,
			}
		);
	}

	const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

	const response = NextResponse.json(
		{ name: "Andrey" },
		{
			status: 200,
		}
	);

	response.cookies.set({
		name: EnumTokens.ACCESS_TOKEN,
		value: "aa1",
		httpOnly: true,
		expires: expires,
	});

	return response;
}
