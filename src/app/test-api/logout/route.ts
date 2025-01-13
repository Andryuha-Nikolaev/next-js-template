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

	const response = NextResponse.json(
		{ name: "Andrey" },
		{
			status: 200,
		}
	);

	response.cookies.set(EnumTokens.ACCESS_TOKEN, "", { expires: new Date(0) });

	return response;
}
