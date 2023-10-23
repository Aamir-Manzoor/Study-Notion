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
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
      {/* Section 1*/}
      <div className="w-[50%] flex flex-col gap-8 mt-4">
        {heading}
        <div className="text-richblack-300 text-md font-medium">
          {subheading}
        </div>

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
      <div className="relative">
        <div className="w-[25rem] h-[20rem] absolute  z-[10] opacity-20  top-[-4rem] left-[-20px] blur-md ">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="b" r="100%" cx="40%" cy="20%">
                <stop offset="0%" stop-color="#0fcaeb" />
                <stop offset="50%" stop-color="#A6FFCB" />
                <stop offset="100%" stop-color="#a9ddbe" />
              </radialGradient>
              <clipPath id="a">
                <path
                  fill="currentColor"
                  d="M784 708.5Q635 917 385 841T123.5 491.5Q112 218 380.5 129T791 270q142 230-7 438.5Z"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#a)">
              <path
                fill="url(#b)"
                d="M784 708.5Q635 917 385 841T123.5 491.5Q112 218 380.5 129T791 270q142 230-7 438.5Z"
              />
            </g>
          </svg>
        </div>
        <div
          className={`h-fit flex flex-row text-base bg-richblack-5 bg-opacity-5  z-10 backdrop-blur-3xl ${codeColor} w-[100%] lg:w-[500px]`}
        >
          <div className="text-center mt-6  flex flex-col w-[10%] text-richblack-400 font-mono font-medium ">
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
              sequence={[codeblock, 2000, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
