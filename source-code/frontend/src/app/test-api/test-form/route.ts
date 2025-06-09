import { NextResponse, type NextRequest } from "next/server";

import { isProd } from "$shared/lib/environment/isProd";

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

	// return NextResponse.json(
	// 	{ error: "Неверный формат" },
	// 	{
	// 		status: 400,
	// 	}
	// );

	// return NextResponse.json(
	// 	{
	// 		error: "Неверный формат",
	// 		errors: {
	// 			[FieldNames.FIRST_NAME]: ["Неверное имя"],
	// 		},
	// 	},
	// 	{
	// 		status: 422,
	// 	}
	// );

	const reqData = await req.formData();
	console.log(Object.fromEntries(reqData.entries()));

	return NextResponse.json(
		{},
		{
			status: 200,
		}
	);
}
