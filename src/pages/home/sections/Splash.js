import ScrollDown from "../ScrollDown";
// import Img from "../../../assets/home_bg.png";

const Splash = () => {
  return (
    <div className="relative flex h-full items-center">
      <div>
        <div className="mb-5 max-w-5xl pl-2 text-5xl font-bold lg:text-7xl xl:text-9xl">
          <div className="text-white">
            Don't expect to
            <br />
            see a <span className="fgym-underline">change</span>
            <br />
            if you don't <br /> make one.
          </div>
        </div>
      </div>
      {/* <img
        src={Img}
        alt=""
        className="absolute right-0 top-1/2 h-[70vh] -translate-y-1/2 transform"
      /> */}
      <ScrollDown />
    </div>
  );
};

export default Splash;
