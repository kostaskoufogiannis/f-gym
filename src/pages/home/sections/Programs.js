// import { useMemo, useRef, useState } from "react";
// import { ArrowLeft } from "../../../components/icons/ArrowLeft";
// import { ArrowRight } from "../../../components/icons/ArrowRight";
import SectionTitle from "../SectionTitle";
// import ImgEmom from "../../../assets/programs/program_emom.jpg";
import ImgEms from "../../../assets/programs/program_ems.jpg";
// import ImgGroup from "../../../assets/programs/p_group.jpg";
import Button from "../../../components/common/Button";

// const PROGRAMS = [
//   {
//     id: "group",
//     title: "ΟΜΑΔΙΚΟ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     img: ImgGroup,
//   },
//   {
//     id: "ems",
//     title: "EMS",
//     description:
//       "Το Miha Bodytec είναι η κορυφαία προπονητική μονάδα στον χώρο της ηλεκτρομυοδιέγερσης (EMS) που γυμνάζει ταυτόχρονα όλες τις μυικές ομάδες μέσα σε 20 λεπτά.",
//     img: ImgEms,
//   },
//   {
//     id: "emom",
//     title: "EMOM",
//     description:
//       "Οι προπονήσεις EMOM μπορούν να κάνουν focus στην αντοχή ή περισσότερο στη δύναμη. Μία προπόνηση EMOM μπορεί να γίνει με το βάρος του σώματος ή να έχει εξοπλισμό, ανάλογα με τους στόχους σου.",
//     img: ImgEmom,
//   },
// ];

const Programs = () => {
  // const programImage = useRef();
  // const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  // const [programs] = useState(PROGRAMS);

  // const currentProgram = useMemo(
  //   () => programs?.[currentProgramIndex],
  //   [currentProgramIndex, programs]
  // );

  // const handleChangeProgram = (direction) => {
  //   if (direction === -1) {
  //     if (currentProgramIndex === 0)
  //       setCurrentProgramIndex(programs?.length - 1);
  //     else setCurrentProgramIndex((prev) => prev - 1);
  //   } else {
  //     if (currentProgramIndex === programs?.length - 1)
  //       setCurrentProgramIndex(0);
  //     else setCurrentProgramIndex((prev) => prev + 1);
  //   }
  // };

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-16 left-1/2 z-0 h-1/2 w-10/12 -translate-x-1/2 transform overflow-hidden bg-black md:top-1/2 md:right-0 md:left-auto md:h-3/4 md:w-2/3 md:-translate-x-0 md:-translate-y-1/2">
        <img
          className="h-full w-full object-cover"
          src={ImgEms}
          alt="trainer_photo"
        />
        <div className="fgym-image-cover bg-black">
          <div className="fgym-image-cover-1 absolute inset-0 z-10 h-full w-0 bg-green-400"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 transform md:-translate-y-1/2">
        <SectionTitle text="Προγράμματα"></SectionTitle>
        <div className="mb-10 max-w-xl text-lg tracking-wide text-white">
          Ομαδικά, EMOM, EMS Miha, HIIT. Ειδικά προγράμματα για κάθε περίπτωση.
        </div>
        <Button text="Περισσότερα"></Button>
      </div>
    </div>
  );
};

export default Programs;
