import { registerUserService, loginUserService } from "../services/authService.js";

export const registerUserController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ status: false, message: "All fields are required" });
    }

    const result = await registerUserService({ fullName, email, password });
    return res.status(result.status ? 201 : 400).json(result);

  } catch (error) {
    console.error("Register Error:", error); 
    res.status(500).json({ status: false, message: error.message });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ status: false, message: "Email and password required" });
    }

    const result = await loginUserService({ email, password });
    return res.status(result.status ? 200 : 401).json(result);

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ status: false, message: error.message });
  }
};

