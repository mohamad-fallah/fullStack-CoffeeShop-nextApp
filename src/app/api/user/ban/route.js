import connectToDB from "@/configs/db";
import BanModel from "@/models/Ban";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, phone } = body;

    // Validation (You) ✅

    await BanModel.create({ email, phone });

    return Response.json({ message: "User banned successfully :))" });
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
