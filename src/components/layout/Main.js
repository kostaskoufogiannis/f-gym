import { Outlet, useRouter } from "@tanstack/react-location";
import classNames from "classnames";

const Main = () => {
  const router = useRouter();
  const isHome =
    router.state.location.pathname === "/home" ||
    router.state.location.pathname === "/";

  document.getElementsByTagName("body")[0].style.overflow = isHome
    ? "hidden"
    : "auto";

  return (
    <div
      className={classNames(
        "relative z-10 h-full",
        isHome ? "fgym-bg" : "pt-20-"
      )}
    >
      <Outlet />
    </div>
  );
};

export default Main;
