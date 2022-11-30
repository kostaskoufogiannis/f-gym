import { Outlet, useRouter } from "@tanstack/react-location";
import classNames from "classnames";

const Main = () => {
  const router = useRouter();
  const isHome = router.state.location.pathname === "/home";

  return (
    <div className={classNames("relative z-10 h-full", !isHome && "pt-20")}>
      <Outlet />
    </div>
  );
};

export default Main;
