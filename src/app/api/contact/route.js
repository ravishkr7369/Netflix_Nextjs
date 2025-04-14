import dbConn from "@/utils/DBConnect";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	try {
		const body = await req.json();
		await dbConn(); // connect to MongoDB
		await Contact.create(body);

		return NextResponse.json({
			status: 200,
			message: "Message sent successfully!",
			data: body // Send the received data back in the response
		});
	} catch (e) {
		return NextResponse.json({
			status: 500,
			message: "Internal Server Error",
			data: null
		});
	}
}
