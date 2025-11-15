import React from "react";
import Video from "./Video.jsx";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] leading-none tracking-tight pt-[0.2vw] text-center">
      <div className="text-[9.5vw] uppercase flex justify-center items-center">
        L'étincelle
      </div>

      <div className="text-[9.5vw] leading-[8.2vw] uppercase flex justify-center items-center">
        qui
        <div className="h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-[1vw]">
          <Video />
        </div>
        génère
      </div>

      <div className="text-[9.5vw] leading-[8.2vw] uppercase flex justify-center items-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
