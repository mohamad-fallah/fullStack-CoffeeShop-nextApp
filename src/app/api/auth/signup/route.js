import connectToDb from "@/configs/db";
import userModel from "@/models/user";

import {
  generateAccessToken,
  hashPassword,
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req) {
  connectToDb();
  const body = await req.json();
  const { name, phone, email, password } = body;

  if (!name) {
    return Response.json({ error: "Invalid name format." }, { status: 400 });
  }

  const isValidPhone = validatePhone(phone);
  if (!isValidPhone) {
    return Response.json({ error: "Invalid phone format." }, { status: 400 });
  }

  if (email.length > 0) {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return Response.json({ error: "Invalid email format." }, { status: 400 });
    }
  }
  const isValidPassword = validatePassword(password);
  if (!isValidPassword) {
    return Response.json(
      { error: "Invalid password format." },
      { status: 400 }
    );
  }

  const isUseExist = await userModel.findOne({
    $or: [
      { name: name },
      ...(email ? [{ email: email }] : []),
      { phone: phone },
    ],
  });

  if (isUseExist) {
    return Response.json(
      { message: "the user name or email exist alredy" },
      { status: 422 }
    );
  }

  const hashedPassword = await hashPassword(password);
  const accessToken = await generateAccessToken({ name: name });

  const users = await userModel.find({});

  await userModel.create({
    name: name,
    email: email,
    phone: phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });

  return Response.json(
    { message: "user signup suceessfully" },
    {
      status: 201,
      headers: { "set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
    }
  );
}
