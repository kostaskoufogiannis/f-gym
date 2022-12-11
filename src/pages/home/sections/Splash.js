import ScrollDown from "../ScrollDown";

const Splash = () => {
  return (
    <div className="relative flex h-full items-center">
      <div>
        <div className="mb-5 max-w-4xl pl-2 text-5xl font-bold md:text-8xl">
          <div className="text-white">
            You can have <br />
            <span className="fgym-underline">results</span>
            <span>
              {" "}
              or excuses <br /> not both.
            </span>
          </div>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Splash;
