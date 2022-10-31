import classNames from "classnames";
import React, { useEffect, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import HomeMenu from "./HomeMenu";
import Programs from "./sections/Programs";
import Splash from "./sections/Splash";
import "./home.css";

// const enum Scenes = {
//   SPLASH,
//   PROGRAMS,
//   ABOUT
// }

const sections = [
  { id: "splash", component: () => <Splash /> },
  { id: "programs", component: () => <Programs />, dark: true },
  { id: "about", component: () => <About /> },
  { id: "contact", component: () => <Contact />, dark: true },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionHeight] = useState(window.innerHeight);
  const [transitionDurations] = useState(1000);
  // const [scrolling, setScrolling] = useState(false);

  // useEffect(() => {
  //   if (!scrolling) return;
  //   setTimeout(() => setScrolling(false), 1000);
  // }, [scrolling]);

  // window.addEventListener(
  //   "wheel",
  //   (event) => {
  //     console.log("scroll");
  //     console.log(scrolling);
  //     console.log(currentSection);

  //     if (scrolling) return;

  //     // scroll down
  //     if (event.deltaY > 0 && currentSection < sections?.length - 1) {
  //       setScrolling(true);
  //       setCurrentSection((prev) => prev + 1);
  //     }
  //     // scroll up
  //     else if (event.deltaY < 0 && currentSection > 0) {
  //       setScrolling(true);
  //       setCurrentSection((prev) => prev - 1);
  //     }
  //   },
  //   false
  // );

  // window.addEventListener("resize", () => {
  //   console.log("resize");
  //   setSectionHeight(window.innerHeight);
  // });

  // useEffect(() => {

  // }, [currentSection]);

  const handleMenuItemClick = (sectionId) =>
    setCurrentSection(sections.findIndex((s) => s.id === sectionId));

  return (
    <div className="h-[100vh] flex">
      {/* <div className="fixed z-50 text-xl p-5 right-0 bg-black text-gray-400">
        {currentSection}
      </div> */}

      <div className="bg-black flex shrink-0 w-32 items-center justify-center">
        <HomeMenu
          onClick={handleMenuItemClick}
          items={sections}
          currentSection={sections[currentSection]}
        />
      </div>
      <div
        className=""
        style={{
          transition: `all ${transitionDurations}ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s`,
          transform: `translate3d(0, ${
            currentSection * sectionHeight * -1
          }px, 0)`,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={classNames(
              "p-10",
              section.dark ? "bg-black" : "bg-white"
            )}
            style={{
              height: sectionHeight,
            }}
          >
            {section?.component()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
