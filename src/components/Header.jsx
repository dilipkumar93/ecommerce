import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const items = useSelector((state) => state.cart.carts);
  const TotalQty = items.reduce((total, item) => total + item.qty, 0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "py-4 shadow-md bg-white" : "py-6 bg-none"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full text-2xl">
        <Link to={"/"} className="uppercase">
          Shopping Bag
        </Link>
        <div className="flex cursor-pointer relative">
          <Link to={"/carts"}>
            <BsBag />
            <div className="flex justify-center items-center absolute bg-red-500 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full">
              {TotalQty}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
