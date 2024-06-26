import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.jpg";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the sucess company",
  },
  {
    Logo: Logo2,
    heading: "Leadership",
    Description: "Fully committed to the sucess company",
  },
  {
    Logo: Logo3,
    heading: "Leadership",
    Description: "Fully committed to the sucess company",
  },
  {
    Logo: Logo4,
    heading: "Leadership",
    Description: "Fully committed to the sucess company",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-col lg:gap-3" key={index}>
                <div className="flex gap-6" key={index}>
                  <div className="w-[4rem] h-[4rem] bg-white rounded-full flex items-center justify-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={element.Logo} alt={""} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">
                      {" "}
                      {element.heading}
                    </h2>
                    <p className="text-base">{element.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    timeline.length - 1 === index ? "hidden" : "lg:block"
                  } h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[1.6rem]`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div
            className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%]
           bg-caribbeangreen-700 flex lg:flex-row flex-col uppercase text-white gap-4 py-5 lg:gap-0 lg:py-10"
          >
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <p className="text-3xl font-bold w-[4.8rem]">10</p>
              <p className="text-caribbeangreen-300 text-sm w-[4.8rem]">
                Years of Experience
              </p>
            </div>

            <div className="flex items-center gap-5 lg:px-14 px-7">
              <p className="text-3xl font-bold w-[4.8rem]">250</p>
              <p className="text-caribbeangreen-300 text-sm w-[4.8rem]">
                Type of courses
              </p>
            </div>
          </div>
          <img
            src={timelineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[25rem] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
