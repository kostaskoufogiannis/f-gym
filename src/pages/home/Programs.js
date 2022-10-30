import { useEffect, useState } from "react";

const programs = [
  {
    id: "group",
    title: "Ομαδικά",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    img: "",
  },
  {
    id: "ems",
    title: "EMS",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    img: "../../public/programs/1.jpg",
  },
  {
    id: "emom",
    title: "EMOM",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    img: "../../public/programs/1.jpg",
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
      <div className="w-1/2">
        <img src={currentProgram.img} />
      </div>
      <div className="w-1/2">
        <h1 className="text-9xl font-bold mb-10 text-white">Προγράμματα</h1>

        <div className="text-2xl relative bg-green-400 shadow p-10 text-black">
          <div>
            <h3 className="mb-5 font-bold text-3xl">{currentProgram.title}</h3>
            <p>{currentProgram.description}</p>
          </div>
          <div>
            <button onClick={() => handleChangeProgram(-1)}>prev</button>
            <button onClick={() => handleChangeProgram(1)}>next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
