import connectToDB from "@/configs/db";
import WishlistModel from "@/models/Wishlist";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { user, product } = body;

    // Validation (You)

    const wish = await WishlistModel.findOne({ user, product });

    if (!wish) {
      await WishlistModel.create({ user, product });
    }

    return Response.json(
      { message: "Product added to wishlist successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
