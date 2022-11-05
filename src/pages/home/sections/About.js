import SectionTitle from "../SectionTitle";
import adinamia from "../../../assets/adinamia.jpg";

const About = () => {
  return (
    <div>
      <SectionTitle text="Trainer" dark={true}></SectionTitle>
      <div className="block relative md:flex md:flex-row-reverse md:items-center">
        <div className="md:w-1/2 md:-mr-10">
          <div className="transform -rotate-3 md:rotate-3 md:w-full md:max-w-2xl md:-ml-10">
            <img src={adinamia} alt="trainer_photo" />
          </div>
        </div>
        <div className="bg-green-400 shadow-box text-black font-semibold text-lg z-10 absolute bottom-10 -mt-10 p-5 md:mt-0 md:static md:text-2xl md:w-1/2 md:max-w-2xl md:p-10 md:py-20">
          Γεια, είμαι η Γαριφαλιά! Είμαι personal trainer, λάτρης της
          προπόνησης, των ταξιδιών και της φυσικής κατάστασης. Όποιος κι αν
          είναι ο στόχος σου στο κομμάτι του fitness μπορώ να σε βοηθήσω να τον
          πετύχεις.
        </div>
      </div>
    </div>
  );
};

export default About;
