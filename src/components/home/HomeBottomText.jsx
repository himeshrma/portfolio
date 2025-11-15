import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-[1vw] mt-[5.5vw]">
      <div
        className="border-[3px] hover:border-[#D3FD50] hover:text-[#D3FD50] 
        h-[7vw] py-[1vw] px-[2vw] mt-[13vw] flex items-center border-white rounded-full uppercase"
      >
        <Link to="/projects" className="text-[7vw] leading-none">
          Work
        </Link>
      </div>

      <div
        className="border-[3px] hover:border-[#D3FD50] hover:text-[#D3FD50] 
        h-[7vw] py-[1vw] px-[2vw] mt-[13vw] flex items-center border-white rounded-full uppercase"
      >
        <Link to="/about" className="text-[7vw] leading-none">
          About
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
