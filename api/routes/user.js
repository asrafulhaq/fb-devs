import express from "express";
import multer from "multer";
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
  userProfileUpdate,
  addFeaturedSlider,
  userProfilePhotoUpdate,
} from "../controllers/userController.js";
// init router
const router = express.Router();

import path from "path";

// resolve
const __dirname = path.resolve();

// multer for slider
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname === "slider") {
      cb(null, path.join(__dirname, "api/public/slider"));
    } else if (file.fieldname === "profile") {
      cb(null, path.join(__dirname, "api/public/profile"));
    }
  },
});

const sliderFeatured = multer({ storage: storage }).array("slider", 10);
const profilePhotoUpload = multer({ storage: storage }).single("profile");

// user auth route
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.put("/profile-update/:id", userProfileUpdate);
router.put(
  "/profile-photo-update/:id",
  profilePhotoUpload,
  userProfilePhotoUpdate
);
router.post("/featured-slider/:id", sliderFeatured, addFeaturedSlider);
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
