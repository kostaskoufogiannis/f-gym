import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="fixed inset-0 z-50 flex h-20 w-full items-center justify-between px-6">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
