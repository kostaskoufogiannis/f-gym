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
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1258.562"
            height="525.691"
            viewBox="0 0 1258.562 525.691"
            className="absolute bottom-0"
          >
            <path
              class="path"
              d="M148.632,510.055H780.587L851.16,248.077l93.029,522.886L1051.119,432h356.076"
              transform="translate(-148.632 -246.776)"
              fill="none"
              stroke="#fff"
              stroke-width="10"
            />
          </svg> */}
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Splash;
