import classNames from "classnames";

const Logo = ({ dark = true }) => {
  return (
    <div className="flex select-none text-3xl font-bold">
      <span className="text-green-400">F</span>
      <span className={classNames(dark ? "text-white" : "text-black")}>
        GYM
      </span>
    </div>
  );
};

export default Logo;
