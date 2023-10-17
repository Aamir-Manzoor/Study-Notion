const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");

const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/Profile");

router.delete("/deleteAccount", auth, deleteAccount);
router.put("/updateprofile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);

router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);


module.exports = router;

