//main copy

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);

  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  function gsapAnimation() {
    const tl = gsap.timeline();

    // Show wrapper
    tl.set("#fullscreennav", { display: "block" });

    // Make closeBtn visible instantly (but positioned off-screen)
    gsap.set(".closeBtn", { opacity: 1, x: 30 });

    // Reset stairs + links
    gsap.set(".navstairs", { y: "-100%", height: "100%" });

    gsap.set(".link", {
      opacity: 0,
      rotateX: 75,
      y: -30,
      transformOrigin: "top",
    });
    gsap.set(".navLink", { opacity: 0 });

    // 1. STAIRS DROP
    tl.to(".navstairs", {
      y: "0%",
      duration: 0.26,
      ease: "power3.out",
      stagger: { amount: -0.23 },
    });

    // 2. LOGO + TOP AREA FADE IN
    tl.to(
      ".navLink",
      {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      },
      "-=0.22"
    );

    // 3. CLOSE BUTTON SLIDES INTO PLACE (but it was already visible)
    tl.to(
      ".closeBtn",
      {
        x: 0,
        duration: 0.28,
        ease: "power3.out",
      },
      "-=0.22"
    );

    // 4. MENU LINKS DROP
    tl.to(
      ".link",
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 0.32,
        ease: "power2.out",
        stagger: { each: 0.08 },
      },
      "-=0.18"
    );
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();

    // 1. CROSS SLIDES OUT (but still visible during menu fold)
    tl.to(".closeBtn", {
      x: 25,
      opacity: 0,
      duration: 0.28,
      ease: "power3.inOut",
    });

    // 2. MENU LINKS FOLD UP
    tl.to(
      ".link",
      {
        opacity: 0,
        rotateX: 75,
        y: -30,
        duration: 0.32,
        ease: "power2.in",
        stagger: { each: 0.08 },
      },
      "-=0.18"
    );

    // 3. LOGO + TOP AREA FADE
    tl.to(
      ".navLink",
      {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      },
      "-=0.22"
    );

    // 4. STAIRS GO UP
    gsap.set(".navstairs", { y: "0%" });

    tl.to(
      ".navstairs",
      {
        y: "-100%",
        duration: 0.26,
        ease: "power3.in",
        stagger: { amount: 0.12 },
      },
      "-=0.05"
    );

    // 5. HIDE NAV
    tl.set("#fullscreennav", { display: "none" });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="  text-white h-screen w-full fixed top-0 left-0 z-[9999]  overflow-hidden hidden "
    >
      <div className="h-screen w-full absolute z-[-1]">
        <div className="h-full w-full flex">
          <div className="navstairs h-0 w-1/5 bg-black"></div>
          <div className="navstairs h-0 w-1/5 bg-black"></div>
          <div className="navstairs h-0 w-1/5 bg-black"></div>
          <div className="navstairs h-0 w-1/5 bg-black"></div>
          <div className="navstairs h-0 w-1/5 bg-black"></div>
          <div className="navstairs h-0 w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksRef} className="relative z-20">
        <div className="navLink flex w-full justify-between items-start">
          {/* svg */}
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

          {/* cross */}
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="closeBtn h-36 w-36 relative flex items-center justify-center cursor-pointer z-[99999]"
          >
            <div className="crossline absolute -mt-5 ml-6 h-full w-[2px] rounded-full bg-white rotate-45 "></div>
            <div className="crossline absolute -mt-5 ml-6 h-full w-[2px] rounded-full bg-white -rotate-45"></div>
          </div>
        </div>

        {/* section */}
        <div className="py-20">
          {/* 1 */}
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
              work
            </h1>
            <div className="moveLink absolute bg-[#D3FD50] text-black flex top-0">
              <div className="moveX flex overflow-x-auto overflow-y-hidden no-scrollbar items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  See Proof of Work
                </h2>
                <img
                  className=" h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/1a.jpeg"
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  See Proof of Work
                </h2>
                <img
                  className=" h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/3a.jpeg"
                />
              </div>
              <div className="moveX flex overflow-x-auto overflow-y-hidden no-scrollbar items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  See Proof of Work
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/1a.jpeg"
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  See Proof of Work
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/3a.jpeg"
                />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
              ABOUT
            </h1>
            <div className="moveLink absolute bg-[#D3FD50] text-black flex top-0">
              <div className="moveX flex overflow-x-auto overflow-y-hidden no-scrollbar items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  know me
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/1a.jpeg"
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  know me
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/3a.jpeg"
                />
              </div>
              <div className="moveX flex overflow-x-auto overflow-y-hidden no-scrollbar items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  know me
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/1a.jpeg"
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  know me
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/3a.jpeg"
                />
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="link origin-top relative border-y border-white">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
              Contact
            </h1>
            <div className="moveLink absolute bg-[#D3FD50] text-black flex top-0">
              <div className="moveX flex overflow-x-auto overflow-y-hidden no-scrollbar items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  let's talk
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/1a.jpeg"
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  connect
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/3a.jpeg"
                />
              </div>
              <div className="moveX flex overflow-x-auto overflow-y-hidden no-scrollbar items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  let's talk
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/1a.jpeg"
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-4 uppercase">
                  hit me up
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover "
                  src="/small/3a.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
