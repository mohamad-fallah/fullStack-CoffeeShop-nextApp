import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPaswword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data) => {
  const Token = sign({ ...data }, process.env.AccsessTokenSecretKey, {
    expiresIn: "60s",
  });

  return Token;
};

const generateRefreshAccessToken = () => {
  const Token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
    expiresIn: "15d",
  });
  return Token;
};

const verifyAccessToken = (token) => {
  try {
    const tokenPlayload = verify(token, process.env.AccsessTokenSecretKey);
    return tokenPlayload;
  } catch (err) {
    console.log("verify access token erorr: ", err);
    return false;
  }
};

const validateEmail = (email) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};
const validatePhone = (phone) => {
  const pattern = /^(\+98|0)?9[0-9]{2}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/g;
  return pattern.test(phone);
};
const validatePassword = (password) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};

export {
  hashPassword,
  verifyPaswword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshAccessToken,
  validateEmail,
  validatePhone,
  validatePassword,
};
