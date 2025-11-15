import React from "react";

const Agence = () => {
  return (
    <div className="section1">
      <div className="h-[20vw] w-[15vw] overflow-hidden  rounded-4xl absolute top-[27vh] left-[29.7vw] bg-blue-500">
        <img
          className="h-full w-full object-cover"
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
          alt=""
        />
      </div>
      <div className=" relative font-[font2]">
        <div className=" mt-[57vh]">
          <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
            Seven7y
            <br />
            two
          </h1>
        </div>
        <div className="pl-[40%] mt-20 bg-amber-800">
          <p className="text-2xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re
            inquisitive and open-minded, and we make sure creativity crowds out
            ego from every corner. A brand is a living thing, with values, a
            personality and a story. If we ignore that, we can achieve
            short-term success, but not influence that goes the distance. We
            bring that perspective to every brand story we help tell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agence;
