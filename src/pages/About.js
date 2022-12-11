import PageHeader from "./PageHeader";
import Img from "../assets/trainer.jpg";
import ImgWIP from "../assets/cookie_about.png";

const About = () => {
  return (
    <div>
      <PageHeader img={Img} title="Trainer" />

      <div className="mx-auto mt-10 w-1/3 text-center">
        <img className="h-full w-full object-cover" src={ImgWIP} alt="" />
      </div>
    </div>
  );
};

export default About;
