import Img from "../assets/gym.jpg";
import ImgWIP from "../assets/cookie_gym.png";
import PageHeader from "./PageHeader";

const Gym = () => {
  return (
    <div>
      <PageHeader img={Img} title="Γυμναστήριο" />

      <div className="mx-auto mt-10 w-3/4 text-center">
        <div className="mb-10">
          Δεν είμαστε ακόμα έτοιμοι, <br /> ελάτε σε λίγο!
        </div>
        <img className="h-full w-full object-cover" src={ImgWIP} alt="" />
      </div>
    </div>
  );
};

export default Gym;
