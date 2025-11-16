import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesArray = [
    "../images/0.jpg",
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg",
    "../images/4.jpg",
    "../images/5.jpg",
    "../images/6.jpg",
    "../images/7.jpg",
    "../images/8.jpg",
    "../images/9.jpg",
    "../images/10.jpg",
    "../images/11.jpg",
    "../images/12.jpg",
    "../images/13.jpg",
    "../images/15.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: false,
        start: "top 27%",
        end: "top -65%",
        scrub: 2,
        pin: true,
        onUpdate: (el) => {
          let imageIndex;
          if (el.progress < 1) {
            imageIndex = Math.floor(el.progress * imagesArray.length);
          } else {
            imageIndex = Math.floor(el.progress * imagesArray.length - 1);
          }

          imageRef.current.src = imagesArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] overflow-hidden rounded-4xl absolute top-[27vh] left-[29.7vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="../images/0.jpg"
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
          <div className="pl-[42%] mt-0 mr-0.5 ">
            <p className="text-5xl mr-10">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and
              open-minded, and we make sure creativity crowds out ego from every
              corner. A brand is a living thing, with values, a personality and
              a story. If we ignore that, we can achieve short-term success, but
              not influence that goes the distance. We bring that perspective to
              every brand story we help tell.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen "></div>
    </div>
  );
};

export default Agence;
