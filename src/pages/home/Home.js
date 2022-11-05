import classNames from "classnames";
import React, { useEffect, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import HomeMenu from "./HomeMenu";
import Programs from "./sections/Programs";
import Splash from "./sections/Splash";
import "./home.css";
import video from "../../assets/video.mp4";

const sections = [
  { id: "splash", component: () => <Splash />, dark: true },
  { id: "programs", component: () => <Programs />, dark: true },
  { id: "about", component: () => <About />, dark: true },
  { id: "gym", component: () => <Programs />, dark: true },
  { id: "contact", component: () => <Contact />, dark: true },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
  const [transitionDurations] = useState(1000);

  useEffect(() => {
    console.log(currentSection);

    let scrolling = false;
    const onScroll = (event) => {
      if (scrolling) {
        console.log("caught you!");
        return;
      }
      scrolling = true;

      setTimeout(() => (scrolling = false), 1000);
      console.log(`currentSection -> ${currentSection}`);
      // scroll down
      if (event.deltaY > 0 && currentSection < sections?.length - 1) {
        setCurrentSection((prev) => prev + 1);
      }
      // scroll up
      else if (event.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    const onResize = (event) => {
      setSectionHeight(window.innerHeight);
    };

    // clean up code
    window.removeEventListener("wheel", onScroll);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);

    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [currentSection]);

  const handleMenuItemClick = (sectionId) =>
    setCurrentSection(sections.findIndex((s) => s.id === sectionId));

  return (
    <div className="h-[100vh] relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay={true}
        loop={true}
        muted={true}
      ></video>
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80"></div>

      {/* menu */}
      <div className="absolute z-20 left-1/2 bottom-5 transform -translate-x-1/2 md:left-5 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 flex items-center justify-center">
        <HomeMenu
          onClick={handleMenuItemClick}
          items={sections}
          currentSection={sections[currentSection]}
        />
      </div>

      <div
        className="ml-0 mb-32
        . md:mb-0 md:ml-32 relative"
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
              "p-5 py-20 overflow-hidden",
              // section.dark ? "bg-black" : "bg-white",
              index === currentSection ? "active" : ""
            )}
            style={{
              height: sectionHeight,
            }}
          >
            <div className="flex items-center h-full">
              {section?.component()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
