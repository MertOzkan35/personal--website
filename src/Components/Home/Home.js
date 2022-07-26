import React from "react";
import { Link } from "react-router-dom";
import Task from "../../images/task.png";

function Home() {
  return (
    <div className="text-[#fad200] grid justify-items-center font-semibold font-serif  ">
      <h1 className="text-[9rem]">Hey Send</h1>
      <h1 className="text-[4rem]">to me</h1>

      <Link className="flex " to="/contact">
        <h1 className="text-[9rem]">Task</h1>
        <img
          className="  flex  items-center  w-10 h-10 opacity-60 hover:opacity-100 "
          src={Task}
        />
      </Link>
    </div>
  );
}

export default Home;
