import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { verify } from "jsonwebtoken";
import { generateAccessToken } from "@/utils/auth";

// Use (You)

// Tickets -> Status 401 -> Req /auth/Refresh -> 200, 401 -> /login-register

export async function POST(req) {
  try {
    connectToDB();
    const refreshToken = cookies().get("refresh-token").value;

    if (!refreshToken) {
      return Response.json(
        { message: "no have refresh Token !!" },
        { status: 401 }
      );
    }

    const user = await UserModel.findOne({ refreshToken });

    if (!user) {
      return Response.json(
        { message: "no have refresh Token !!" },
        { status: 401 }
      );
    }

    verify(refreshToken, process.env.RefreshTokenSecretKey);
    const newAccessToken = generateAccessToken({ email: user.email });

    return Response.json(
      { message: "new access token generated successfully :))" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${newAccessToken};path=/;httpOnly=true;`,
        },
      }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
