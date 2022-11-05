import classNames from "classnames";
import { useState } from "react";

const MenuIcon = ({ dark = true }) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleClick = () => {
    setMenuStatus((prev) => !prev);
  };

  return (
    <>
      <div className="fixed right-5 z-50 cursor-pointer" onClick={handleClick}>
        <div
          className={classNames(
            "h-1 w-10 mb-4 transition-transform origin-left",
            dark ? "bg-white" : "bg-black",
            menuStatus ? "rotate-45" : "rotate-0"
          )}
        ></div>
        <div
          className={classNames(
            "h-1 w-10 transition-transform origin-left",
            dark ? "bg-white" : "bg-black",
            menuStatus ? "-rotate-45 translate-y-0.5" : "rotate-0"
          )}
        ></div>
      </div>
      {menuStatus && (
        <div className="fixed z-40 inset-0 bg-black text-white uppercase text-5xl h-full w-full flex items-center justify-center">
          <div className="flex flex-col gap-8 text-center">
            <a href="/" className="hover:line-through">
              ΑΡΧΙΚΗ
            </a>
            <a href="/" className="hover:line-through">
              TRAINER
            </a>
            <a href="/" className="hover:line-through">
              ΠΡΟΓΡΑΜΜΑΤΑ
            </a>
            <a href="/" className="hover:line-through">
              ΓΥΜΝΑΣΤΗΡΙΟ
            </a>
            <a href="/" className="hover:line-through">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuIcon;
