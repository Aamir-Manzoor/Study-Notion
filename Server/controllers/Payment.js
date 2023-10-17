const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const { courseEnrollmentEmail } = require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");


exports.capturePayment = async (req, res) => {
  const { course_id } = req.body;
  const userId = req.User.id;

  if (!course_id) {
    return res.json({
      success: false,
      message: "Please Provide valid Course ID",
    });
  }

  let course;

  try {
    course = await Course.findById(course_id);

    if (!course) {
      return res.josn({
        success: false,
        message: "could not find the course",
      });
    }

    const uid = new mongoose.Types.ObjectId(userId);
    if (course.studentsEnrolled.includes(uid)) {
      return res.status(200).json({
        success: false,
        message: "Studnet is already enrolled",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: message.error,
    });
  }

  const amount = course.price;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
    notes: {
      courseId: course_id,
      userId,
    },
  };

  try {
    const PaymentResponse = await instance.orders.create(options);
    console.log(PaymentResponse);

    return res.status(200).json({
      success: true,
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      thumbnail: course.thumbnail,
      orderId: PaymentResponse.orderId,
      currency: PaymentResponse.currency,
      amount: PaymentResponse.amount,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "could not Initiate Order",
    });
  }
};

exports.verifySignature = async (req, res) => {
  const webhookSecret = "12345678";
  const signature = req.headers["x-razor-pay-signature"];

  const shasum = crypto.createHmac("sha256", webhookSecret);
  shasum.update(JSON.stringify(req.body));

  const digest = shasum.digest("hex");

  if (signature === digest) {
    console.log("Payment is Authorised");

    const { courseId, userId } = req.body.payload.payment.entity.notes;
    try {
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { studentsEnrolled: userId } },
        { new: true }
      );

      if (!enrolledCourse) {
        return res.status(500).json({
          success: false,
          messgae: "course not found",
        });
      }

      console.log(enrolledCourse);

      const enrolledStudent = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { courses: courseId } },
        { new: true }
      );

      console.log(enrolledStudent);

      const emailResponse = await mailSender(
        enrolledStudent.email,
        "Congratulatiuons from CodeHelp",
        "You Have been successfully enrolled in this course"
      );

      console.log(emailResponse);

      return res.status(200).json({
        success: true,
        message: "signature verified nad course Added",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid Request",
    });
  }
};
