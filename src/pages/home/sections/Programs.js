import { useEffect, useState } from "react";
import { ArrowLeft } from "../../../components/icons/ArrowLeft";
import { ArrowRight } from "../../../components/icons/ArrowRight";
import SectionTitle from "../SectionTitle";
import Img1 from "../../../assets/programs/1.jpg";
import Img2 from "../../../assets/programs/2.jpg";
import Img3 from "../../../assets/programs/3.jpg";
// import classNames from "classnames";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper";
// import Img4 from "../../../programs/4.jpg";

// import "swiper/css";
// import "swiper/css/effect-cards";

const PROGRAMS = [
  {
    id: "group",
    title: "ΟΜΑΔΙΚΑ",
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
      "Οι προπονήσεις EMOM μπορούν να κάνουν focus στην αντοχή ή περισσότερο στη δύναμη και συνήθως διαρκούν από 4 έως 45 λεπτά. Μία προπόνηση EMOM  μπορεί να γίνει με το βάρος του σώματος ή να έχει εξοπλισμό, ανάλογα με τους στόχους σου. Συνήθως, μία προπόνηση που στοχεύει στο καρδιαναπνευστικό σύστημα περιλαμβάνει υψηλότερο αριθμό επαναλήψεων και λίγα (ή ελαφριά) βάρη.",
    img: Img3,
  },
];

const Programs = () => {
  const [currentProgramIndex] = useState(0);
  const [currentProgram, setCurrentProgram] = useState(null);
  const [programs, setPrograms] = useState(PROGRAMS);

  useEffect(() => {
    if (isNaN(currentProgramIndex)) return;
    setCurrentProgram({
      ...programs?.[currentProgramIndex],
      order: programs.length,
    });
  }, [currentProgramIndex, programs]);

  useEffect(() => {
    setPrograms(
      PROGRAMS.map((p, index) => ({
        ...p,
        order: index,
      })).sort((a, b) => (a.order > b.order ? 1 : -1))
    );
    setCurrentProgram(PROGRAMS[0]);
  }, [programs.length]);

  const handleChangeProgram = (direction) => {
    if (direction === -1) {
      // setPrograms(programs.map((p, index) => ({...p, order: index})))
      // if (currentProgramIndex === 0)
      //   setCurrentProgramIndex(programs?.length - 1);
      // else setCurrentProgramIndex((prev) => prev - 1);
    } else {
      const newPrograms = programs.map((p, index) => ({
        ...p,
        order: p.order === 0 ? programs.length - 1 : index - 1,
      }));
      setPrograms(newPrograms.sort((a, b) => (a.order > b.order ? 1 : -1)));
      // if (currentProgramIndex === programs?.length - 1)
      //   setCurrentProgramIndex(0);
      // else setCurrentProgramIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      <SectionTitle text="Προγράμματα" dark={true}></SectionTitle>
      <div className="flex">
        <div className="w-1/2">
          <div className="transition-all text-2xl relative bg-green-400 shadow-box p-10 text-black">
            <div className="mb-5">
              <h3 className="mb-5 font-bold text-3xl">
                {currentProgram?.title}
              </h3>
              <p>{currentProgram?.description}</p>
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

        <div className="w-1/2 overflow-hidden">
          {/* <Swiper
            spaceBetween={5}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {programs.map((p, index) => (
              <SwiperSlide
                key={index}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
              >
                <div key={index} className="h-[500px] w-[350px] bg-gray-500">
                  <img
                    alt="image1"
                    src={p.img}
                    className="object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          {/* <img src={currentProgram.img} alt="program_image" /> */}
          {/* <div className="relative ml-10">
            {programs.map((p, index) => (
              <div
                key={index}
                className={classNames(
                  "h-[500px] w-[350px] bg-gray-500 absolute",
                  p.order !== 0 ? "filter grayscale brightness-[.25]" : ""
                )}
                style={{
                  zIndex: programs.length - 1 - p.order,
                  transform: `translate(${index * 50}px, -${index * 50}px)`,
                }}
              >
                <img
                  alt="image1"
                  src={p.img}
                  className="object-cover h-full w-full"
                />
                <div className="absolute top-0 left-0 bg-black text-white p-3">
                  {p.order}({p.title}){programs.length - 1 - p.order}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Programs;
