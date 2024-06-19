import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const secretKey = process.env.JWT_SECRET;

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId) => {
  return jwt.sign({ userId }, secretKey, { expiresIn: "1h" });
};
