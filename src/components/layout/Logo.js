import { useNavigate } from "@tanstack/react-location";
import classNames from "classnames";
import ImgSanta from "../../assets/santa_hat.png";

const Logo = ({ dark = true }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate({ to: "/home", replace: true });

  return (
    <div
      className="relative flex cursor-pointer select-none text-3xl font-bold"
      onClick={handleClick}
    >
      <span className="text-green-400">F</span>
      <span className={classNames(dark ? "text-white" : "text-black")}>
        GYM
      </span>
      <img
        src={ImgSanta}
        alt="santa hat"
        className="absolute left-full -translate-x-4 -translate-y-2 transform"
      />
    </div>
  );
};

export default Logo;
