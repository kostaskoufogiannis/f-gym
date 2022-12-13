import PageHeader from "./PageHeader";
import Img from "../assets/trainer.jpg";
import ImgWIP from "../assets/cookie_about.png";

const About = () => {
  return (
    <div>
      <PageHeader img={Img} title="Trainer" />

      <div className="mx-auto mt-10 w-2/3 max-w-xl text-center md:w-full">
        <img className="h-full w-full object-cover" src={ImgWIP} alt="" />
      </div>
    </div>
  );
};

export default About;
