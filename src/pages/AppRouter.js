import { ReactLocation, Router } from "@tanstack/react-location";
import About from "./About";
import Gym from "./Gym";
import Programs from "./Programs";
import Home from "./home/Home";

const routes = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "gym",
    element: <Gym />,
  },
  {
    path: "programs",
    element: <Programs />,
  },
];

const reactLocation = new ReactLocation();

const AppRouter = ({ children }) => {
  return (
    <Router location={reactLocation} routes={routes}>
      {children}
    </Router>
  );
};

export default AppRouter;
