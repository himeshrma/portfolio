import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const Navigation = () => {
  const navGreenRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  return (
    <div className="z-10 flex fixed top-0 w-full items-start justify-between">
      {/* LEFT LOGO */}
      <div className="mt-1 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380.14 117.26"
          className="h-12 w-34 text-white "
        >
          <g fill="currentColor">
            <path d="M0 7.76h21.49v109.5H0V7.76Zm43.21 62.62v15.57H21.49V70.38h21.72Zm21.49-15.74v15.74H43.21V54.64h21.49Zm21.72-15.57v15.57H64.7V39.07h21.72Zm0-31.31h21.49v109.5H86.42V7.76Z" />
            <path d="M120.24 7.76h21.49v109.5h-21.49V7.76Zm21.49 15.57h21.72v15.74h-21.72V23.33Zm21.72 15.74h21.49v31.31h-21.49V39.07Zm21.49-15.74h21.72v15.74h-21.72V23.33Zm21.72-15.57h21.49v109.5h-21.49V7.76Z" />
            <path d="M240.03 7.76h21.49v62.62h-21.49V7.76Zm21.49 62.62h21.72v15.57h-21.72V70.38Zm21.72 15.57h21.49v31.31h-21.49V85.95Zm21.49-15.57h21.72v15.57h-21.72V70.38Zm21.72-62.62h21.49v62.62h-21.49V7.76Z" />
          </g>

          <path
            fill="currentColor"
            d="M361.05 6.25c.52-1.24 1.23-2.33 2.13-3.25s1.96-1.66 3.16-2.19c1.21-.53 2.49-.8 3.87-.8s2.67.27 3.87.8c1.21.53 2.26 1.26 3.16 2.19.9.93 1.61 2.01 2.13 3.25s.78 2.57.78 3.98-.26 2.74-.78 3.98c-.52 1.24-1.23 2.32-2.13 3.24-.9.92-1.96 1.64-3.16 2.15-1.21.51-2.5.77-3.87.77s-2.66-.26-3.87-.77c-1.21-.51-2.26-1.23-3.16-2.15-.9-.92-1.61-2-2.13-3.24-.52-1.24-.78-2.57-.78-3.98s.26-2.74.78-3.98Zm2.75 6.81c.35.89.83 1.67 1.45 2.33s1.35 1.19 2.2 1.57c.85.39 1.77.58 2.77.58s1.92-.19 2.77-.58 1.58-.91 2.2-1.57c.61-.66 1.1-1.44 1.45-2.33s.52-1.83.52-2.83-.17-1.93-.52-2.83c-.35-.89-.83-1.67-1.45-2.33-.62-.66-1.35-1.18-2.2-1.57-.85-.39-1.77-.58-2.77-.58s-1.92.19-2.77.58c-.85.39-1.58.91-2.2 1.57-.62.66-1.1 1.44-1.45 2.33s-.52 1.83-.52 2.83.18 1.94.52 2.83Zm11.02.63c-.3.54-.67.99-1.1 1.35-.43.36-.91.63-1.45.83-.53.19-1.09.29-1.66.29-.86 0-1.62-.16-2.3-.47-.68-.31-1.26-.74-1.74-1.28s-.85-1.18-1.11-1.92c-.26-.73-.39-1.52-.39-2.34s.13-1.64.38-2.37c.25-.73.61-1.37 1.07-1.9.46-.53 1.03-.96 1.72-1.27.68-.31 1.45-.47 2.3-.47.59 0 1.16.09 1.7.28.54.18 1.03.45 1.46.8s.79.79 1.07 1.31c.28.52.47 1.13.56 1.83h-2.57c-.14-.53-.4-.97-.78-1.32-.38-.35-.9-.52-1.58-.52-.93 0-1.63.35-2.1 1.03-.47.69-.71 1.56-.71 2.61 0 .5.06.97.19 1.41.13.44.31.83.55 1.16s.53.59.88.79c.35.19.74.29 1.16.29.66 0 1.2-.18 1.62-.52.42-.35.67-.82.76-1.41h2.68c-.11.68-.31 1.29-.62 1.83Z"
          />
        </svg>
      </div>

      {/* RIGHT MENU SECTION */}
      <div
        onClick={() => {
          setNavOpen(true);
        }}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
          line1Ref.current.style.background = "black";
          line2Ref.current.style.background = "black";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
          line1Ref.current.style.background = "white";
          line2Ref.current.style.background = "white";
        }}
        className="relative bg-black h-12 w-[16vw] flex items-center justify-end px-6 cursor-pointer overflow-hidden z-30"
      >
        {/* GREEN EXPANDING BG */}
        <div
          ref={navGreenRef}
          className="absolute top-0 left-0 w-full h-0 bg-[#D3FD50] transition-all duration-200 z-10"
        ></div>

        {/* HAMBURGER LINES */}
        <div className="flex flex-col gap-1 h-full items-end justify-center rounded-full relative z-20">
          <div ref={line1Ref} className="w-12 h-[0.1vw] bg-white"></div>
          <div ref={line2Ref} className="w-6 h-[0.1vw] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
