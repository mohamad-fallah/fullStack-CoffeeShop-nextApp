import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { verifyAccessToken } from "./auth";

const authUser = async () => {
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }

  return user;
};

export { authUser };
