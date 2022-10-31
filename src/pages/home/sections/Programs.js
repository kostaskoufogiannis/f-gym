import { useEffect, useState } from "react";
import { ArrowLeft } from "../../../components/icons/ArrowLeft";
import { ArrowRight } from "../../../components/icons/ArrowRight";
import SectionTitle from "../SectionTitle";
import Img1 from "../../../programs/1.jpg";
import Img2 from "../../../programs/2.jpg";
import Img3 from "../../../programs/3.jpg";
// import Img4 from "../../../programs/4.jpg";

const programs = [
  {
    id: "group",
    title: "Ομαδικά",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    img: Img1,
  },
  {
    id: "ems",
    title: "EMS",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    img: Img2,
  },
  {
    id: "emom",
    title: "EMOM",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    img: Img3,
  },
];

const Programs = () => {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [currentProgram, setCurrentProgram] = useState(
    programs[currentProgramIndex]
  );

  useEffect(() => {
    if (isNaN(currentProgramIndex)) return;
    setCurrentProgram(programs[currentProgramIndex]);
  }, [currentProgramIndex]);

  const handleChangeProgram = (direction) => {
    if (direction === -1) {
      if (currentProgramIndex === 0)
        setCurrentProgramIndex(programs?.length - 1);
      else setCurrentProgramIndex((prev) => prev - 1);
    } else {
      if (currentProgramIndex === programs?.length - 1)
        setCurrentProgramIndex(0);
      else setCurrentProgramIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <div>
        <SectionTitle text="Προγράμματα" dark={true}></SectionTitle>
        <div className="flex">
          <div className="w-1/2">
            <img src={currentProgram.img} alt="program_image" />
          </div>
          <div className="w-1/2">
            <div className="text-2xl relative bg-green-400 shadow-box p-10 text-black">
              <div className="mb-5">
                <h3 className="mb-5 font-bold text-3xl">
                  {currentProgram.title}
                </h3>
                <p>{currentProgram.description}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleChangeProgram(-1)}>
                  <div className="w-10">
                    <ArrowLeft />
                  </div>
                </button>
                <button onClick={() => handleChangeProgram(1)}>
                  <div className="w-10">
                    <ArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
