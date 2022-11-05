// import video from "../../../assets/video.mp4";

const Splash = () => {
  return (
    <div className="flex items-center">
      <div>
        <div className="font-bold text-5xl pl-2 max-w-4xl mb-5 md:text-8xl">
          {/* Δοκίμασε τα όριά σου */}
          {/* <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80"></div> */}
          <div className="text-white">
            You can have <br />
            results or excuses <br /> not both.
            <div className="font-bold text-7xl flex mt-10 md:text-9xl">
              <span className="text-green-400">F</span>
              <span>GYM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
