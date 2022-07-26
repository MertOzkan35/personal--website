import React from "react";
import Spotfy from "../../images/Spotfy.gif";
import Notes from "../../images/yemek.gif";

function Work() {
  return (
    <div>
      <div className="flex items-center  justify-between  pt-20 px-10 text-white font-semibold font-serif  ">
        <div>
          Spotify Clone - With React and Tailwind
          <div className=" grid relative border-opacity-70 hover:border-opacity-100 justify-items-center w-[28rem] h-[15rem] hover:w-[42rem] hover:h-[23rem] border-solid border-white rounded-lg border-2">
            <img
              className="  flex absolute rounded-lg  items-center  w-full h-full "
              src={Spotfy}
            />
          </div>
        </div>
        <div>
          Exercise With React
          <div className=" grid relative border-opacity-70 hover:border-opacity-100 justify-items-center w-[28rem] h-[15rem] hover:w-[42rem] hover:h-[23rem] border-solid border-white rounded-lg border-2">
            <img
              className="  flex absolute rounded-lg  items-center  w-full h-full "
              src={Notes}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex  items-center justify-between  pt-10 px-10 text-white font-semibold font-serif  ">
        <div>
          Spotfy Clone - With Tailwind
          <div className=" grid relative border-opacity-70 hover:border-opacity-100 justify-items-center w-[28rem] h-[15rem]  border-solid border-white rounded-lg border-2">
            <img
              className="  flex absolute rounded-lg  items-center  w-full h-full "
              src={Spotfy}
            />
          </div>
        </div>
        <div>
          Spotfy Clone - With Tailwind
          <div className=" grid relative border-opacity-70 hover:border-opacity-100 justify-items-center w-[28rem] h-[15rem] border-solid border-white rounded-lg border-2">
            <img
              className="  flex absolute rounded-lg  items-center  w-full h-full "
              src={Spotfy}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Work;
