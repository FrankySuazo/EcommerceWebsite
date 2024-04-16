import React from "react";
//import Link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//import components
import CartItem from "../components/CartItem";
//import sidebar context
import { SidebarContext } from "../context/SidebarContext";
//import cart context
import { CartContext } from "../context/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "right-full"
      } w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b"></div>
      <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
      {/* icon */}
      <div
        onClick={handleClose}
        className="cursor-pointer w-8 h-8bflex justify-center items-center"
      >
        <IoMdArrowForward className="text-2x1" />
      </div>
      {/* </div> */}
      <div>
        {cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
      </div>
    </div>
  );
};
export default Sidebar;
