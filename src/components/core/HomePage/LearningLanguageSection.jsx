import React from "react";
import CTAButton from "./Button";
import HightlightText from "../HomePage/HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col gap-3 mt-36 mb-20 items-center">
      <div className="text-black text-4xl font-medium text-center">
        Your Swiss Knife for
        <HightlightText text={"Learning any language"} />
      </div>

      <div className="text-center font-medium w-[70%] text-richblack-600 mx-auto text-base mt-3">
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking, custom schedule and more.
      </div>

      <div className="flex flex-row items-center justify-center mt-5">
        <img
          src={know_your_progress}
          alt="know_your_progress"
          className="object-contain -mr-28"
        />
        <img
          src={compare_with_others}
          alt="compare_with_others"
          className="object-contain"
        />
        <img
          src={plan_your_lesson}
          alt="plan_your_lesson"
          className="object-contain -ml-36"
        />
      </div>

      <div className="w-fit">
        <CTAButton active={true} linkto={"/signup"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
