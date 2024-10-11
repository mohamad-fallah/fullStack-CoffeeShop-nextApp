import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { code, percent, maxUse } = body;

    // Validation (You) ✅

    await DiscountModel.create({
      code,
      percent,
      maxUse,
    });

    return Response.json(
      { message: "Discount code created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
