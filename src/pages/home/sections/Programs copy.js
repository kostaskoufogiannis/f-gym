import { useMemo, useRef, useState } from "react";
import { ArrowLeft } from "../../../components/icons/ArrowLeft";
import { ArrowRight } from "../../../components/icons/ArrowRight";
import SectionTitle from "../SectionTitle";
import ImgEmom from "../../../assets/programs/program_emom.jpg";
import ImgEms from "../../../assets/programs/program_ems.jpg";
import ImgGroup from "../../../assets/programs/p_group.jpg";

const PROGRAMS = [
  {
    id: "group",
    title: "ΟΜΑΔΙΚΟ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: ImgGroup,
  },
  {
    id: "ems",
    title: "EMS",
    description:
      "Το Miha Bodytec είναι η κορυφαία προπονητική μονάδα στον χώρο της ηλεκτρομυοδιέγερσης (EMS) που γυμνάζει ταυτόχρονα όλες τις μυικές ομάδες μέσα σε 20 λεπτά.",
    img: ImgEms,
  },
  {
    id: "emom",
    title: "EMOM",
    description:
      "Οι προπονήσεις EMOM μπορούν να κάνουν focus στην αντοχή ή περισσότερο στη δύναμη. Μία προπόνηση EMOM μπορεί να γίνει με το βάρος του σώματος ή να έχει εξοπλισμό, ανάλογα με τους στόχους σου.",
    img: ImgEmom,
  },
];

const Programs = () => {
  const programImage = useRef();
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [programs] = useState(PROGRAMS);

  const currentProgram = useMemo(
    () => programs?.[currentProgramIndex],
    [currentProgramIndex, programs]
  );

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
    <div className="relative flex h-full items-center">
      {/* text */}
      <div className="relative z-20 w-3/4 p-10 md:w-1/2">
        <div className="relative z-10 mb-20">
          <SectionTitle text="Προγράμματα"></SectionTitle>
        </div>
        <div className="relative flex flex-col text-2xl text-white">
          <div className="mb-10 min-h-[20rem] flex-1">
            <h3 className="mb-5 text-3xl font-bold text-green-400">
              {currentProgram?.title}
            </h3>
            <p className="leading-10">{currentProgram?.description}</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleChangeProgram(-1)}>
              <div className="w-10 text-green-400">
                <ArrowLeft />
              </div>
            </button>
            <button onClick={() => handleChangeProgram(1)}>
              <div className="w-10 text-green-400">
                <ArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* image */}
      <div ref={programImage} className="h-full overflow-hidden md:w-1/2">
        <div
          className="flex h-full w-full"
          style={{
            transition: `all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s`,
            transform: `translate3d(${
              currentProgramIndex * programImage?.current?.offsetWidth * -1
            }px, 0, 0)`,
          }}
        >
          {programs.map((p, index) => (
            <div key={index} className="h-full w-full shrink-0">
              <img
                alt="program_image"
                src={p.img}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
