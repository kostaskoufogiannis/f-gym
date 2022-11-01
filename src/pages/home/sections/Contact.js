import SectionTitle from "../SectionTitle";

const Contact = () => {
  return (
    <div>
      <SectionTitle text="Επικοινωνία" dark={true}></SectionTitle>
      <div className="flex items-center justify-center">
        <div className="-mr-10 relative z-10">
          <div className="text-2xl bg-green-400 shadow-box p-20 text-black max-w-2xl font-semibold">
            <div className="flex gap-5 items-center">
              <div>1</div>
              <div>Σαχτούρη 123</div>
            </div>
            <div className="flex gap-5 items-center">
              <div>1</div>
              <div>2101234567</div>
            </div>
            <div className="flex gap-5 items-center">
              <div>1</div>
              <div>6981234567</div>
            </div>
            <div className="flex gap-5 items-center">
              <div>1</div>
              <div>cookie🖤love.com</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-[20px] border-black transform rotate-3 max-w-2xl">
            {/* <img src={} alt="contact_photo" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
