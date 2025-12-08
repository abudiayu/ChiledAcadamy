import express from "express";
import {
  registerUserController,
  loginUserController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerUserController);
router.post("/login", loginUserController);

export default router;
