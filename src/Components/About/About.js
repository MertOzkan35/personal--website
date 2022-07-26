import React from "react";
import Kep from "../../images/kep.png";
import Map from "../../images/mapping.png";
import Atom from "../../images/atom.png";

function About() {
  return (
    <div>
      <div className="flex items-center  justify-between  pt-16 px-10 text-white font-semibold font-serif  ">
        <div className=" grid bg-[#1e1e25] pt-5 border-opacity-70 hover:border-opacity-100 justify-items-center w-[30rem] h-[12rem] border-solid border-white rounded-lg border-2">
          <p>İzmir Anadolu Lisesi</p>
          <img className="  flex  items-center  w-8 h-8  " src={Kep} />
          <p>2009 - 2013</p>
        </div>
        <div className=" grid bg-[#1e1e25] pt-5 border-opacity-70 hover:border-opacity-100 justify-items-center w-[30rem] h-[12rem] border-solid border-white rounded-lg border-2">
          <p>Karadeniz Teknik Üniversitesi</p>
          <img className="  flex  items-center  w-8 h-8  " src={Kep} />
          <p>2013 - 2017</p>
        </div>
      </div>
      <div className="flex  items-center justify-between  pt-32 px-10 text-white font-semibold font-serif  ">
        <div className=" grid bg-[#1e1e25] pt-5 border-opacity-70 hover:border-opacity-100 justify-items-center w-[30rem] h-[12rem] border-solid border-white rounded-lg border-2">
          <p>Harita Mühendisi</p>
          <img className="  flex  items-center  w-8 h-8  " src={Map} />
          <p>2017 - 2022</p>
        </div>
        <div className=" grid bg-[#1e1e25] pt-5 border-opacity-70 hover:border-opacity-100 justify-items-center w-[30rem] h-[12rem] border-solid border-white rounded-lg border-2">
          <p>Web Developer</p>
          <img className="  flex  items-center  w-8 h-8  " src={Atom} />
          <p>2022 - ...</p>
        </div>
      </div>
    </div>
  );
}

export default About;
