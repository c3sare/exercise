import MenuButton from "./navbar/MenuButton";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { GoHeart } from "@react-icons/all-files/go/GoHeart";
import { CgShoppingCart } from "@react-icons/all-files/cg/CgShoppingCart";
import { BiUser } from "@react-icons/all-files/bi/BiUser";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between my-4 px-2">
      <MenuButton>
        <GiHamburgerMenu />
      </MenuButton>
      <div className="flex items-center">
        <MenuButton>
          <GoHeart />
        </MenuButton>
        <MenuButton>
          <CgShoppingCart />
        </MenuButton>
        <MenuButton>
          <BiUser />
        </MenuButton>
      </div>
    </div>
  );
};

export default Navbar;
