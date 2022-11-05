import SectionTitle from "../SectionTitle";
import contactImg from "./../../../assets/contact.jpg";

const Contact = () => {
  return (
    <div>
      <SectionTitle text="Επικοινωνία" dark={true}></SectionTitle>
      <div className="flex items-center relative">
        <div className="-mr-10 relative z-10">
          <div className="text-lg bg-green-400 shadow-box p-5 text-black max-w-2xl font-semibold md:text-2xl">
            <div className="flex flex-nowrap whitespace-nowrap gap-5 items-center">
              <div>1</div>
              <div>Σαχτούρη 123</div>
            </div>
            <div className="flex flex-nowrap whitespace-nowrap gap-5 items-center">
              <div>1</div>
              <div>2101234567</div>
            </div>
            <div className="flex flex-nowrap whitespace-nowrap gap-5 items-center">
              <div>1</div>
              <div>6981234567</div>
            </div>
            <div className="flex flex-nowrap whitespace-nowrap gap-5 items-center">
              <div>1</div>
              <div>cookie🖤love.com</div>
            </div>
            <div className="flex flex-nowrap whitespace-nowrap gap-5 items-center">
              <div>1</div>
              <div>@cookie</div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl">
          <div className="">
            <img
              src={contactImg}
              alt="contact_photo"
              className="max-h-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
