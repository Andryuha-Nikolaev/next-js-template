import { NextResponse, type NextRequest } from "next/server";

import { isProd } from "@/utils/environment/isProd";

// eslint-disable-next-line @typescript-eslint/require-await
export async function POST(req: NextRequest) {
	console.log("authorization form", req.headers.get("authorization"));

	if (isProd()) {
		return NextResponse.json(
			{ error: "Resource not found." },
			{
				status: 404,
			}
		);
	}

	// return NextResponse.json(
	// 	{ error: "Resource not found." },
	// 	{
	// 		status: 401,
	// 	}
	// );

	console.log(req);

	return NextResponse.json(
		{},
		{
			status: 200,
		}
	);
}
