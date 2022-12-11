import { AddressIcon } from "../../../components/icons/AddressIcon";
import { EmailIcon } from "../../../components/icons/EmailIcon";
import { InstagramIcon } from "../../../components/icons/InstagramIcon";
import { MobileIcon } from "../../../components/icons/MobileIcon";
import { PhoneIcon } from "../../../components/icons/PhoneIcon";
import SectionTitle from "../SectionTitle";
import Img from "./../../../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-10 left-1/2 z-0 h-1/2 w-10/12 -translate-x-1/2 transform overflow-hidden bg-black md:top-1/2 md:right-0 md:left-auto md:h-3/4 md:w-2/3 md:-translate-x-0 md:-translate-y-1/2">
        <img
          className="h-full w-full object-cover"
          src={Img}
          alt="trainer_photo"
        />
        <div className="fgym-image-cover bg-black">
          <div className="fgym-image-cover-1 absolute inset-0 z-10 h-full w-0 bg-green-400"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 transform md:-translate-y-1/2">
        <SectionTitle text="Επικοινωνία"></SectionTitle>
        <div className="max-w-2xl text-lg text-white md:text-2xl">
          <div className="mb-2 flex flex-nowrap items-center gap-5 whitespace-nowrap">
            <div className="w-6">
              <AddressIcon />
            </div>
            <div>Σαχτούρη 123</div>
          </div>
          <div className="mb-2 flex flex-nowrap items-center gap-5 whitespace-nowrap">
            <div className="w-6">
              <PhoneIcon />
            </div>
            <div>2101234567</div>
          </div>
          <div className="mb-2 flex flex-nowrap items-center gap-5 whitespace-nowrap">
            <div className="w-6">
              <MobileIcon />
            </div>
            <div>6981234567</div>
          </div>
          <div className="mb-2 flex flex-nowrap items-center gap-5 whitespace-nowrap">
            <div className="w-6">
              <EmailIcon />
            </div>
            <div>cookie🖤gmail.com</div>
          </div>
          <div className="flex flex-nowrap items-center gap-5 whitespace-nowrap">
            <div className="w-6">
              <InstagramIcon />
            </div>
            <div>@cookie</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
