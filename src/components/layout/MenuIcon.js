import classNames from "classnames";

const MenuIcon = ({ dark = false }) => {
  return (
    <div className={classNames(dark ? "text-white" : "text-black")}>
      <span>-</span>
      <span>-</span>
    </div>
  );
};

export default MenuIcon;
