const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
  try {
    const email = req.body.email;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not registered with us enter a valid Email`,
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      { token: token, 
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true }
    );

    console.log("Details" , updatedDetails);

    const url = `http://localhost:3000/updatePassword/${token}`;

    await mailSender(email,
       "Password Reset", 
       `Your Link for email verifiation is ${url}. Please click this url to reset your passwor`
       );

    return res.json({
      sucess: true,
      message: "Email Sent Sucessfully, Please check Your Email to continue Further",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
      sucess: false,
      message: `Some Error in sending the Reset Message`,
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    if (confirmPassword !== password  ) {
      return res.json({
        success: false,
        message: "Password and confirm Password Didn't match",
      });
    }

    const userDetails = await User.findOne({ token: token });

    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is invalid",
      });
    }

    if (userDetails.resetPasswordExpires > Date.now()) {
      return res.status(403).json({
        success: false,
        message: "Token is expired, Please regenerate your token ",
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    await User.findOneAndUpdate(
      { token: token },
      { passowrd: encryptedPassword },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "SomeThing Went wrong While Sending reset Password Mail",
    });
  }
};
