import { NextResponse, type NextRequest } from "next/server";

import { isProd } from "@/utils/environment/isProd";

// eslint-disable-next-line @typescript-eslint/require-await
export async function POST(req: NextRequest) {
	if (isProd()) {
		return NextResponse.json(
			{ error: "Resource not found." },
			{
				status: 404,
			}
		);
	}

	console.log(req);

	return NextResponse.json(
		{},
		{
			status: 200,
		}
	);
}
