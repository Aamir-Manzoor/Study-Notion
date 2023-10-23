import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
const InstructorSection = () => {
  return (
    <div className="mt-16 flex flex-row gap-20 items-center">
      <div className="w-[50%]">
        <img src={Instructor} alt="Instructor" />
      </div>

      <div className="w-[50%] flex flex-col gap-10">
        <p className="text-4xl font-medium w-[50%]">
          Become an
          <HighlightText text={"Instructor"} />
        </p>

        <p className="font-medium text-base w-[80%] text-richblack-300">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </p>

        <span className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            Start Learning Today
          </CTAButton>
        </span>
      </div>
    </div>
  );
};

export default InstructorSection;
