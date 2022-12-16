import { useNavigate } from "@tanstack/react-location";
import classNames from "classnames";
import ImgSanta from "../../assets/santa_hat.png";

const Logo = ({ dark = true }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate({ to: "/home", replace: true });

  return (
    <div
      className="relative flex cursor-pointer select-none gap-2 text-3xl font-bold text-white"
      onClick={handleClick}
    >
      <span>εὖ</span>
      <span>gym</span>
      <img
        src={ImgSanta}
        alt="santa hat"
        className="absolute left-full -translate-x-4 transform"
      />
    </div>
  );
};

export default Logo;
