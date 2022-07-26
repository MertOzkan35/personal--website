import React from "react";
import { Link } from "react-router-dom";
import Home from "../../images/home2.png";

function Navbar() {
  return (
    <div className="  flex items-center justify-between px-5 pt-5 pb-0  w-full   ">
      <div className=" text-white font-semibold gap-3 font-serif    flex justify-between ">
        Mert Özkan
        <Link to="/">
          <img
            className="  flex opacity-70 hover:opacity-100 items-center  w-5 h-5 "
            src={Home}
          />
        </Link>
      </div>
      <div className="  pt-1 font-mono font-semibold text-white flex items-center justify-between ">
        <p className="px-3 ">
          <Link to="/about">ABOUT</Link>
        </p>
        <p className="px-3  ">
          <Link to="/works">WORKS</Link>
        </p>
        <p className=" px-3 ">
          <Link to="/contact">CONTACT</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
