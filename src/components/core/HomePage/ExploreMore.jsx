import React from "react";
import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HightlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses = result[0].courses[0];
    setCurrentCard = result[0].courses[0].heading;
  };

  return (
    <div className="mt-28">
      <div className="text-4xl font-medium text-center">
        Unlock the
        <HightlightText text={"Power of Code"} />
      </div>
      <p className="text-center text-richblack-300 text-base mt-3">
        Learn to Build Anything You Can Imagine
      </p>

      <div className="flex flex-row rounded-full bg-richblack-700 mt-5 gap-2 mb-5 border-richblack-100 px-1 py-1">
        {tabsName.map((element, index) => (
          <div
            className={`text-base flex flex-row  items-center
          ${
            currentTab === element
              ? "bg-richblack-900 text-richblack-5 font-medium"
              : "text-richblack-200 "
          }
          rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2
          `}
            key={index}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      <div className="lg:h-[10rem]">
        {/* Course card ka group*/}

        <div>
        {
        }
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
