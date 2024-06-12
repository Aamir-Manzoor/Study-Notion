import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";
import "./Home.css";
import elipseImage2 from "../assets/Images/Ellipse 2.png";
import elipseImage1 from "../assets/Images/Ellipse 1.png";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div>
      {/* Section 1*/}
      <div className="relative mx-auto flex max-w-maxContent flex-col w-11/12  text-white items-center justify-between">
        <Link to={"/signup"}>
          <div
            className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
          transition-all duration-200 hover:scale-95 w-fit shadow-md shadow-pure-greys-500"
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full px-10 py-2
             transition-all duration-200 group-hover:bg-richblack-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-medium mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-col relative items-center gap-7 mt-32 mb-10">
          <div className="flex flex-row mt-10 gap-7 absolute lg:z-50 bottom-[100%]">
            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/signup"}>
              Book a Demo
            </CTAButton>
          </div>

          <div className="mx-3 my-12 shadow-blue-200 -z-10s relative vid1">
            <div>
              <img
                src={elipseImage2}
                alt="elipse"
                width={"100%"}
                className="absolute bottom-[1%] -z-10"
              />
              <img
                src={elipseImage1}
                alt="elipse"
                width={"100%"}
                className="absolute right-[12%] top-[2%] -z-10"
              />
            </div>
            <video muted loop autoPlay>
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
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
            codeblock={[
              `<!DOCTYPE html>`,
              `<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>`,
              `h1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`,
            ]}
            codeColor={"text-yellow-25"}
            imgPos={"-top[40%] right-[8%]"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2*/}
        <div className="">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-medium max-w-[40%]">
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
            codeblock={[
              `<!DOCTYPE html>`,
              `<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>`,
              `h1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`,
            ]}
            codeColor={"text-yellow-25"}
            imgPos={"-top[40%] right-[66%]"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        <ExploreMore />
      </div>

      {/* Section 2*/}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[19rem]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 mx-auto">
            <div className="lg:h-[10rem]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton linkto={"/signup"} active={true}>
                <div className="flex gap-2 items-center">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton linkto={"/signup"} active={false}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-8">
          <div className="mb-10 mt-[-6rem] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] text-black">
              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              <div className="text-base">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3*/}

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 
       bg-richblack-900 text-white">
        <InstructorSection />
        <ReviewSlider/>
      </div>

      {/* Section 4*/}
      <Footer />
    </div>
  );
};

export default Home;
