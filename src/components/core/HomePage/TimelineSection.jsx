import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

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
      <div className="flex flex-row gap-15 items-center text-black">
        <div className="w-[45%] flex flex-col gap-5">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-row gap-6" key={index}>
                <div className="w-[6rem] h-[5rem] bg-white flex items-center">
                  <img src={element.Logo} alt={""} />
                </div>

                <div>
                  <h2 className="font-semibold text-lg"> {element.heading}</h2>
                  <p className="text-base">{element.Description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative shadow-blue-200">
          <img
            src={timelineImage}
            alt="timelineImage"
            className="shadow-white object-cover h-fit"
          />

          <div className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bg-caribbeangreen-700 flex flex-row uppercase text-white py-7 px-10">
            <div className="flex flex-row gap-10 items-center border-r border-caribbeangreen-300 px-7">
              <p className="text-3xl font-bold ">10</p>
              <p className="text-caribbeangreen-300 text-sm ">
                Years of Experience
              </p>
            </div>

            <div className="flex flex-row items-center gap-10 px-7">
              <p className="text-3xl font-bold ">250</p>
              <p className="text-caribbeangreen-300 text-sm ">
                Type of courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
