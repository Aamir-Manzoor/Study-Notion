import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";

import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import LearningLanguageSection from '../components/core/HomePage/TimelineSection'
import TimelineSection from '../components/core/HomePage/LearningLanguageSection'

const Home = () => {
  return (
    <div>
      {/* Section 1*/}
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent text-white items-center justify-between ">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex items-center gap-2 rounded-full px-10 py-2 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-8">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-md font-medium text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row mt-8 gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/signup"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-14 shadow-blue-200 ">
          <video muted loop autoPlay src={Banner} type="video/mp4"></video>
        </div>
        {/* Code Section 1*/}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"Coding Potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`
             <!DOCTYPE html>/n
             <html>/nhead><title>Example</title><linkrel="stylesheet"href="styles.css">/n
             /head>/n
             body>/n
             h1><ahref="/">Header</a>/n
             /h1>/nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>/n
             /nav>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={""}
          />
        </div>

        {/* Code Section 2*/}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold max-w-[40%]">
                Start
                <HighlightText text={"Coding in Seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`
            <<!DOCTYPE html>/n
            <html>/nhead><title>Example</title><linkrel="stylesheet"href="styles.css">/n
            /head>/n
            body>/n
            h1><ahref="/">Header</a>/n
            /h1>/nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>/n
            /nav>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={""}
          />
        </div>
      </div>

      {/* Section 2*/}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[18rem]">
          <div className="w-11/12 max-w-maxContent flex items-center justify-center gap-14 mx-auto text-white pt-[10rem]">
            <CTAButton linkto={"/signup"} active={true}>
              <div className="flex gap-3 items-center">
                Explore Full Catalog
                <FaArrowRight />
              </div>
            </CTAButton>
            <CTAButton linkto={"/signup"} active={false}>
              Learn More
            </CTAButton>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7  text-white">
          <div className="flex flex-row gap-24 mb-10 mt-10">
            <div className="text-4xl font-semibold w-[45%] text-black">
              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 w-[55%] items-start">
              <div className="text-lg text-black">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
        

        <TimelineSection/>

        <LearningLanguageSection/>
      </div>

      {/* Section 3*/}

      {/* Section 4*/}
    </div>
  );
};

export default Home;
