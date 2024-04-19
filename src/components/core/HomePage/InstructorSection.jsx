import React from "react";
import Instructor from "../../../assets/Images/Instructor.jpg";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
const InstructorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center">
      <div className="lg:w-[50%]">
        <img
          src={Instructor}
          alt="Instructor"
          className="shadow-white shadow-[-20px_-20px_0_0]"
        />
      </div>

      <div className="lg:w-[50%] flex flex-col gap-10">
        <p className="text-4xl font-medium lg:w-[50%]">
          Become an
          <HighlightText text={"Instructor"} />
        </p>

        <p className="font-medium text-base text-justify w-[90%] text-richblack-300">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </p>

        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-3">
              Start Learning Today
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
