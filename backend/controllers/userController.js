import {
  signupUserService,
  signInUserService,
} from "../services/userService.js";

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await signupUserService({
      email,
      password,
      firstName,
      lastName,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await signInUserService({ email, password });
    res.status(200).json({ message: "Signed in successfully", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
