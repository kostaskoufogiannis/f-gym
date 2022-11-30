import { useNavigate } from "@tanstack/react-location";
import classNames from "classnames";

const Logo = ({ dark = true }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate({ to: "/home", replace: true });

  return (
    <div
      className="flex cursor-pointer select-none text-3xl font-bold"
      onClick={handleClick}
    >
      <span className="text-green-400">F</span>
      <span className={classNames(dark ? "text-white" : "text-black")}>
        GYM
      </span>
    </div>
  );
};

export default Logo;
