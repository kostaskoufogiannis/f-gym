import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import HomeMenu from "./HomeMenu";
import Programs from "./Programs";
import Splash from "./Splash";

// const enum Scenes = {
//   SPLASH,
//   PROGRAMS,
//   ABOUT
// }

const sections = [
  { id: "splash", component: () => <Splash /> },
  { id: "about", component: () => <About /> },
  { id: "programs", component: () => <Programs /> },
  { id: "contact", component: () => <Contact /> },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const handleMenuItemClick = (sectionId) => {
    setCurrentSection(sections.find((s) => s.id === sectionId));
  };

  return (
    <div className="h-[100vh] relative z-10 touch-none">
      <div className="w-full h-full flex justify-center items-center p-10">
        <div className="w-3/4">{currentSection?.component()}</div>
      </div>

      <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
        {/* {JSON.stringify(currentSection, 2, 2)} */}
        <HomeMenu
          onClick={handleMenuItemClick}
          items={sections}
          currentSectionId={currentSection?.id}
        />
      </div>
    </div>
  );
};

export default Home;
