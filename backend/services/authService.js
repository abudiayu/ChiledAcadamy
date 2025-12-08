import { db } from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUserService = async ({ fullName, email, password }) => {
  const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  if (existing.length > 0) {
    return { status: false, message: "Email already taken" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)",
    [fullName, email, hashedPassword]
  );

  return { status: true, message: "User registered successfully" };
};

export const loginUserService = async ({ email, password }) => {
  const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  if (user.length === 0) {
    return { status: false, message: "Invalid email or password" };
  }

  const isMatch = await bcrypt.compare(password, user[0].password);

  if (!isMatch) {
    return { status: false, message: "Invalid email or password" };
  }

  const token = jwt.sign(
    {
      id: user[0].id,
      fullName: user[0].full_name,
      email: user[0].email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    status: true,
    message: "Login successful",
    token,
    user: {
      id: user[0].id,
      fullName: user[0].full_name,
      email: user[0].email,
    },
  };
};
