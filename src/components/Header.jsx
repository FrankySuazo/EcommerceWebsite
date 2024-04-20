import React, { useContext, useEffect } from "react";
//sidebar context
import { SidebarContext } from "../context/SidebarContext";
//cart context
import { CartContext } from "../context/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
//import link
import { Link } from "react-router-dom";
//import logo <<needes to change
import Logo from "../img/logo.jpg";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContent(CartContext);
  //event Listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-cneter justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src="" alt="" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2x1" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[120xp] w-[18px] h-[18px] text-white rounded-fill flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
