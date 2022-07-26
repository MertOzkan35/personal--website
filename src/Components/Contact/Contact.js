import React, { useState } from "react";
import Location from "../../images/location.png";
import Send from "../../images/send.png";
import Web from "../../images/website.png";

function Contact() {
  function sendMail() {
    var link = "mailto:mertozkan.296@gmail.com";

    window.location.href = link;
  }

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="border-opacity-70 hover:border-opacity-100 justify-items-center w-[26rem] h-[32rem] border-solid">
        <div className="bg-[#1e1e25] justify-end text-start text-white h-full  font-semibold  border-white rounded-lg border-2">
          <p className=" pt-8 pl-7"> Contact İnformation </p>
          <div className=" flex   row-auto pt-16 pl-5 ">
            <img
              className="  rounded-2xl
             items-center  w-8 h-8  "
              src={Location}
            />
            <p className="pl-3 pt-2">
              Location : <span className="text-[#c6c5ca]">İzmir</span>{" "}
            </p>
          </div>

          <div className=" flex   row-auto pt-16 pl-5 ">
            <img
              className=" rounded-2xl
             items-center  w-8 h-8  "
              src={Send}
            />
            <p className="pl-3 pt-1">
              E-mail :
              <span className="text-[#c6c5ca]"> mertozkan.296@gmail.com</span>{" "}
            </p>
          </div>

          <div className=" flex   row-auto pt-16 pl-5 ">
            <img
              className="  rounded-2xl
             items-center  w-8 h-8  "
              src={Web}
            />
            <p className="pl-3 pt-1">
              Website :
              <span className="text-[#c6c5ca]">
                {" "}
                <a href="https://github.com/MertOzkan35">
                  https://github.com/MertOzkan35
                </a>
              </span>
            </p>
          </div>
          <div className=" flex   items-center justify-center pt-16 opacity-80 hover:opacity-100  ">
            <button className="border-2 rounded-full w-32  " onClick={sendMail}>
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
