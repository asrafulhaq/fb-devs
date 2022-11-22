import express from "express";
import {
  loggedInUser,
  login,
  register,
  activateAccount,
  activateAccountByCode,
  forgotPassword,
  passwordResetAction,
  resendActivation,
} from "../controllers/userController.js";
// init router
const router = express.Router();

// user auth route
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.get("/activate/:token", activateAccount);
router.post("/code-activate", activateAccountByCode);
router.post("/resend-activate", resendActivation);
router.post("/forgot-password/", forgotPassword);
router.post("/forgot-password/:token", passwordResetAction);

// export default router
export default router;
