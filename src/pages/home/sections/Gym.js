import SectionTitle from "../SectionTitle";
import ImgEmom from "../../../assets/programs/program_emom.jpg";
import Button from "../../../components/common/Button";

const Gym = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-16 left-1/2 z-0 h-1/2 w-10/12 -translate-x-1/2 transform overflow-hidden bg-black md:top-1/2 md:right-0 md:left-auto md:h-3/4 md:w-2/3 md:-translate-x-0 md:-translate-y-1/2">
        <img
          className="h-full w-full object-contain"
          src={ImgEmom}
          alt="trainer_photo"
        />
        <div className="fgym-image-cover bg-black">
          <div className="fgym-image-cover-1 absolute inset-0 z-10 h-full w-0 bg-green-400"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 transform md:-translate-y-1/2">
        <SectionTitle text="Γυμναστήριο"></SectionTitle>
        <div className="mb-10 max-w-xl text-lg tracking-wide text-white">
          Προγράμματα δύναμης, αντοχής, αποκατάστασης. EMS Miha
        </div>
        <Button text="Περισσότερα"></Button>
      </div>
    </div>
  );
};

export default Gym;
