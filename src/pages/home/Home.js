import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import HomeMenu from "./HomeMenu";
import Programs from "./sections/Programs";
import Splash from "./sections/Splash";
import Gym from "./sections/Gym";
import "./home.css";

const sections = [
  { id: "splash", component: () => <Splash />, dark: true },
  { id: "programs", component: () => <Programs />, dark: true },
  { id: "about", component: () => <About />, dark: true },
  { id: "gym", component: () => <Gym />, dark: true },
  { id: "contact", component: () => <Contact />, dark: true },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
  const [transitionDurations] = useState(1000);
  const [touchStart, setTouchStart] = useState(0);
  const [scrollingStatus, setScrollingStatus] = useState(0);
  const scrolling = useRef(false);
  const previousEndPointX = useRef();
  const previousEndPointY = useRef();
  const [backgroundTransform, setBackgroundTransform] = useState();

  useEffect(() => {
    const onScroll = (event) => {
      if (scrolling.current) return;
      scrolling.current = true;

      setTimeout(() => (scrolling.current = false), 1000);

      if (event?.deltaY > 0 && currentSection < sections?.length - 1) {
        setCurrentSection((prev) => prev + 1);
      }
      // scroll up
      else if (event?.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    const onTouchStart = (event) => {
      console.log(event);
      setTouchStart(event?.touches?.[0]?.clientY);
    };

    const onTouchMove = (event) => {
      const clientX = event?.touches?.[0]?.clientY;

      if (clientX < touchStart - 10) {
        setScrollingStatus(-1);
      } else if (clientX > touchStart + 10) {
        setScrollingStatus(1);
      } else {
        setScrollingStatus(0);
      }
    };

    const onTouchEnd = (event) => {
      if (scrolling.current) return;
      scrolling.current = true;

      setTimeout(() => (scrolling.current = false), 1000);

      // scroll down
      if (scrollingStatus === -1 && currentSection < sections?.length - 1) {
        setCurrentSection((prev) => prev + 1);
        setScrollingStatus(0);
      }
      // scroll up
      else if (scrollingStatus === 1 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
        setScrollingStatus(0);
      }
    };

    const onResize = () => setSectionHeight(window.innerHeight);

    // clean up code
    window.removeEventListener("wheel", onScroll);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("resize", onResize);

    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
    };
  }, [currentSection, scrollingStatus, touchStart]);

  const handleMenuItemClick = (sectionId) =>
    setCurrentSection(sections.findIndex((s) => s.id === sectionId));

  const handleMouseMove = (event) => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const movementYPerc = event.clientY / screenHeight;
    const movementXPerc = event.clientX / screenWidth;
    const maxMovementX = 20;
    const maxMovementY = 20;
    // const distance = Math.hypot(
    //   event.x - previousEndPointX.current,
    //   event.y - previousEndPointY.current
    // );

    previousEndPointX.current = event.x;
    previousEndPointY.current = event.y;

    setBackgroundTransform(
      `translate(${-movementXPerc * maxMovementX}px,${
        -movementYPerc * maxMovementY
      }px)`
    );
  };

  return (
    <div
      className="overflow-hidden- relative h-full overflow-auto"
      onMouseMove={handleMouseMove}
    >
      {/* menu */}
      <div className="fixed left-1/2 bottom-6 z-20 flex -translate-x-1/2 transform items-center justify-center md:left-5 md:top-1/2 md:translate-x-0 md:-translate-y-1/2">
        <HomeMenu
          onClick={handleMenuItemClick}
          items={sections}
          currentSection={sections[currentSection]}
        />
      </div>

      {/* background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 flex h-full w-full items-center justify-center text-[32vw] font-bold text-white opacity-5"
        style={{ transform: backgroundTransform }}
      >
        FGYM
      </div>

      <div
        className="relative"
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
              index === currentSection ? "active" : "",
              "px-6 py-20 md:px-[10%]"
            )}
            style={{
              height: sectionHeight,
            }}
          >
            <div className="h-full overflow-hidden">{section?.component()}</div>
          </div>
        ))}
      </div>
      {/* <div className="h-1 bg-gray-700"></div> */}
    </div>
  );
};

export default Home;
