import video from "../../../assets/video.mp4";

const Splash = () => {
  return (
    <>
      <div className="font-bold text-8xl pl-2 max-w-4xl mb-5">
        {/* Δοκίμασε τα όριά σου */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 w-full h-full text-white pl-10 pt-48">
          You can have <br />
          results or excuses <br /> not both.
          <div className="font-bold text-9xl flex mt-10">
            <span className="text-green-400">F</span>
            <span>GYM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Splash;
