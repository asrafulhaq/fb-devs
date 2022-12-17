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
  findUserAccount,
  sendPsswordResetOTP,
  checkPasswordResetOTP,
  passwordReset,
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
router.post("/find-user-account", findUserAccount);
router.post("/send-password-reset-otp", sendPsswordResetOTP);
router.post("/check-password-reset-otp", checkPasswordResetOTP);
router.post("/user-password-reset", passwordReset);

// export default router
export default router;
