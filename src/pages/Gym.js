import Img from "../assets/gym.jpg";
import ImgWIP from "../assets/cookie_gym.png";
import PageHeader from "./PageHeader";

const Gym = () => {
  return (
    <div>
      <PageHeader img={Img} title="Γυμναστήριο" />

      <div className="mx-auto mt-10 w-2/3 max-w-xl text-center md:w-full">
        <img className="h-full w-full object-cover" src={ImgWIP} alt="" />
        <div className="mt-5 text-2xl font-bold">
          Δεν είμαστε ακόμα έτοιμοι. <br /> Δουλεύουμε σκληρά όμως!
        </div>
      </div>
    </div>
  );
};

export default Gym;
