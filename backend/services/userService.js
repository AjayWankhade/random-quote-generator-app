import prisma from "../prismaClient.js";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../utils/authUtils.js";
import bcrypt from "bcrypt";

export const signupUserService = async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    return newUser;
  } catch (error) {
    console.error(`Error signing up user: ${error.message}`);
    throw new Error(`Error signing up user: ${error.message}`);
  }
};

export const signInUserService = async ({ email, password }) => {
  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if user exists
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Compare passwords
    console.log("User password from DB:", user.password);
    console.log("Entered password:", password);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Is password valid?", isPasswordValid);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    // Generate JWT token
    const token = generateToken(user.userId);
    return token;
  } catch (error) {
    console.error(`Error signing in user: ${error.message}`);
    throw new Error(`Error signing in user: ${error.message}`);
  }
};
