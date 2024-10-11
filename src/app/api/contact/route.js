import connectToDB from "@/configs/db";
import ContactModel from "@/models/Contact";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    // Validation (You)

    await ContactModel.create({ name, email, phone, company, message });

    return Response.json(
      { message: "Message saved successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
}
