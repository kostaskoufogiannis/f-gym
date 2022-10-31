import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

const Header = () => {
  return (
    <header className="fixed z-50 inset-0 w-full h-20 flex justify-between items-center px-6">
      <Logo />
      <MenuIcon />
    </header>
  );
};

export default Header;
