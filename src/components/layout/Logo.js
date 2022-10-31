import classNames from "classnames";

const Logo = ({ dark = true }) => {
  return (
    <div className="flex font-bold text-3xl">
      <span className="text-green-400">F</span>
      <span className={classNames(dark ? "text-white" : "text-black")}>
        GYM
      </span>
    </div>
  );
};

export default Logo;
