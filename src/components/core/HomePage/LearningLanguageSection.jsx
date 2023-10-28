import React from "react";
import CTAButton from "./Button";
import HightlightText from "../HomePage/HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";

const LearningLanguageSection = () => {
  return (
    <div>
      <div className="text-4xl font-semibold my-10 text-center">
        Your Swiss Knife for
        <HightlightText text={"Learning any language"} />
        <div className="text-center font-medium lg:w-[75%] text-richblack-700 leading-6 mx-auto text-base mt-3">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-center mt-8 lg:mt-0">
          <img
            src={know_your_progress}
            alt="know_your_progress"
            className="object-contain lg:-mr-32"
          />
          <img
            src={compare_with_others}
            alt="compare_with_others"
            className="object-contain lg:mb-10 lg:-mt-0 -mt-12"
          />
          <img
            src={plan_your_lesson}
            alt="plan_your_lesson"
            className="object-contain lg:-ml-36 lg:-mt-5 -mt-16"
          />
        </div>
      </div>

      <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
        <CTAButton active={true} linkto={"/signup"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
