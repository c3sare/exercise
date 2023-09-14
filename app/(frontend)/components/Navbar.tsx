import MenuButton from "./navbar/MenuButton";
import MenuIcon from "@/app/(frontend)/icons/MenuIcon";
import HeartIcon from "@/app/(frontend)/icons/HeartIcon";
import CartIcon from "@/app/(frontend)/icons/CartIcon";
import UserIcon from "@/app/(frontend)/icons/UserIcon";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between pt-[38px] px-[20px]">
      <MenuButton>
        <MenuIcon />
      </MenuButton>
      <nav className="flex items-center gap-[11px]">
        <MenuButton>
          <HeartIcon />
        </MenuButton>
        <MenuButton>
          <CartIcon />
        </MenuButton>
        <MenuButton>
          <UserIcon />
        </MenuButton>
      </nav>
    </header>
  );
};

export default Navbar;
