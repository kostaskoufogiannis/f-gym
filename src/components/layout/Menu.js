import classNames from "classnames";
import { useState } from "react";

const Menu = ({ dark = true }) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleClick = () => setMenuStatus((prev) => !prev);

  return (
    <>
      <div className="fixed right-6 z-50 cursor-pointer" onClick={handleClick}>
        <div
          className={classNames(
            "mb-4 h-[3px] w-10 origin-left transition-transform",
            dark ? "bg-white" : "bg-black",
            menuStatus ? "rotate-45" : "rotate-0"
          )}
        ></div>
        <div
          className={classNames(
            "h-[3px] w-10 origin-left transition-transform",
            dark ? "bg-white" : "bg-black",
            menuStatus ? "translate-y-0.5 -rotate-45" : "rotate-0"
          )}
        ></div>
      </div>
      <div
        className={classNames(
          "fixed inset-0 z-40 flex h-full w-full transform items-center justify-center bg-black text-3xl uppercase text-white transition-all duration-500 md:text-5xl",
          menuStatus ? "translate-y-0" : "-translate-y-full"
        )}
      >
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
    </>
  );
};

export default Menu;
