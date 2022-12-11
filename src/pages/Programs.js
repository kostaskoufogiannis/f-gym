import PageHeader from "./PageHeader";
import Img from "../assets/programs.jpg";
import ImgWIP from "../assets/cookie_gym.png";

const Programs = () => {
  return (
    <div>
      <PageHeader img={Img} title="Προγράμματα" />

      <div className="mx-auto mt-10 w-3/4 text-center">
        <div className="mb-10">
          Δεν είμαστε ακόμα έτοιμοι, <br /> ελάτε σε λίγο!
        </div>
        <img className="h-full w-full object-cover" src={ImgWIP} alt="" />
      </div>
    </div>
  );
};

export default Programs;
