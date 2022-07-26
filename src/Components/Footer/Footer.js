import React from "react";
import rec from "../../images/react 2.png";
import js from "../../images/javasc.png";
import bs from "../../images/bootstrap.png";
import cod from "../../images/coding.png";
function Footer() {
  return (
    <div className="columns-2 flex bg-[#e8ddd7] items-center justify-center w-full relative md:h-[32rem] lg:h-[42rem] xl:h-[54rem]  2xl:h-[64rem] ">
      <div className=" flex text-center  text-[5rem]  font-serif text-black items-center justify-center w-full">
        <p>I am improving myself on</p>
      </div>
      <div className=" flex flex-col text-center items-center justify-center w-full">
        <div className="flex flex-row mt-20  ">
          <img className=" p-5  pb-20 flex justify-start" src={rec} />
          <img className=" p-5 pt-20 flex" src={js} />
        </div>
        <div className="flex flex-row   ">
          <img className=" p-5 pb-20  flex justify-start" src={bs} />
          <img className=" p-5 pt-20  flex" src={cod} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
