import SectionTitle from "../SectionTitle";
import adinamia from "../../../adinamia.jpg";

const About = () => {
  return (
    <div className="">
      <SectionTitle text="Trainer"></SectionTitle>
      <div className="flex items-center justify-center">
        <div className="-mr-10 relative z-10">
          <div className="text-2xl bg-green-400 shadow-box p-20 text-black max-w-2xl font-semibold">
            Γεια, είμαι η Γαριφαλιά! Είμαι personal trainer, λάτρης της
            προπόνησης, των ταξιδιών και της φυσικής κατάστασης. Όποιος κι αν
            είναι ο στόχος σου στο κομμάτι του fitness μπορώ να σε βοηθήσω να
            τον πετύχουμε μαζί.
          </div>
        </div>
        <div className="">
          <div className="border-[20px] border-black transform rotate-3 max-w-2xl">
            <img src={adinamia} alt="trainer_photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
