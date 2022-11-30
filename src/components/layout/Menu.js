import { Link } from "@tanstack/react-location";
import classNames from "classnames";
import { useState } from "react";

const Menu = ({ dark = true }) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleClick = () => setMenuStatus((prev) => !prev);

  const handleMenuItemClick = () => setMenuStatus(false);

  return (
    <>
      <div
        className="fixed right-6 z-50 flex h-10 w-10 cursor-pointer items-center"
        onClick={handleClick}
      >
        <div>
          <div
            className={classNames(
              "mb-4 h-[3px] w-10 origin-left transition-transform",
              dark ? "bg-white" : "bg-black",
              menuStatus
                ? "translate-x-[6px] -translate-y-[4px] rotate-45"
                : "rotate-0"
            )}
          ></div>
          <div
            className={classNames(
              "h-[3px] w-10 origin-left transition-transform",
              dark ? "bg-white" : "bg-black",
              menuStatus
                ? "translate-x-[6px] translate-y-[4px] -rotate-45"
                : "rotate-0"
            )}
          ></div>
        </div>
      </div>
      <div
        className={classNames(
          "fixed inset-0 z-40 flex h-full w-full transform items-center justify-center bg-black text-3xl uppercase text-white transition-all duration-500 md:text-5xl",
          menuStatus ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col gap-8 text-center">
          <Link onClick={handleMenuItemClick} to="/home">
            ΑΡΧΙΚΗ
          </Link>
          <Link onClick={handleMenuItemClick} to="about">
            TRAINER
          </Link>
          <Link onClick={handleMenuItemClick} to="gym">
            ΓΥΜΝΑΣΤΗΡΙΟ
          </Link>
          <Link onClick={handleMenuItemClick} to="programs">
            ΠΡΟΓΡΑΜΜΑΤΑ
          </Link>
          <Link onClick={handleMenuItemClick} to="home">
            ΕΠΙΚΟΙΝΩΝΙΑ
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
