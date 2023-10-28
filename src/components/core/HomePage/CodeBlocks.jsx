import React from "react";
import CTAButton from "../HomePage/Button";
// import HighlightText from "../HomePage/HighlightText";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  codeblock,
  ctabtn1,
  ctabtn2,
  backgroundGradient,
  codeColor,
  imgPos,
}) => {
  return (
    <div
      className={`flex flex-col ${position} my-20 justify-between gap-14 lg:gap-10`}
    >
      {/* Section 1*/}
      <div className="w-[1000%] lg:w-[40%]  flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300  font-bold">{subheading}</div>

        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
        
      {/* Code Section 2*/}
      <div
        className={`h-fit code-border flex flex-row text-[0.6rem] sm:text-sm leading-5 sm:leading-6 
        relative w-[100%] lg:w-[29rem]
       bg-opacity-5  z-10 backdrop-blur-3xl ${codeColor} w-[100%] lg:w-[500px]`}
      >
        {backgroundGradient}

        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        <div w={`w-[90%] flex flex-col gap-2 font-bold font-mono pr-2 `}>
          <TypeAnimation
            sequence={[codeblock[0], 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              color: `yellow`,
            }}
            omitDeletionAnimation={true}
          />
          <TypeAnimation
            sequence={[codeblock[1], 1000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              color: `white`,
            }}
            omitDeletionAnimation={true}
          />
          <TypeAnimation
            sequence={[codeblock[2], 200, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              color: `#D43D63`,
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
