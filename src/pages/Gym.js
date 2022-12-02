import ImgGym from "../assets/gym.jpg";
import PageHeader from "./PageHeader";

const Gym = () => {
  return (
    <div>
      <PageHeader img={ImgGym} title="Γυμναστήριο" />

      <div className="bg-black p-20 text-white">
        <div className="flex gap-20">
          <div className="w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="w-1/2">Garifalaki</div>
        </div>
      </div>
    </div>
  );
};

export default Gym;
