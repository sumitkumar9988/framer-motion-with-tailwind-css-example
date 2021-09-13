import React from "react";
import gsap from "gsap";
const SpotlightEffect = ({tittle}) => {
  function handleMouseMove(evt) {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    gsap.set("#cursor", {
      x: mouseX,
      y: mouseY,
    });

    gsap.to("#shape1", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1,
    });
    gsap.to("#shape2", {
      x: mouseX,
      y: mouseY,
      stagger: -0.2,
    });
    gsap.to("#shape3", {
      x: mouseX,
      y: mouseY,
      stagger: -0.3,
    });
  }

  return (
    <div
      onMouseMove={(events) => handleMouseMove(events)}
      className="cursor-none overflow-hidden"
    >
      <div
        id="cursor"
        class="fixed  w-8 h-8 select-none pointer-events-none rounded-full z-50 transform  mr-0 mb-0 -mt-4 -ml-4  "
      >

      </div>
      <div class="relative h-28 w-88 mt-60 md:mt-80  bg-red-500 overflow-hidden">
        <div className="absolute  transform rounded-full">
          <div
            id="shape1"
            class="absolute transform rounded-full  bg-blue-200 w-120 h-120 -mt-60 -ml-60 mr-0 mb-0"
          ></div>
          <div
            id="shape2"
            class="absolute transform rounded-full bg-pink-400  w-104 h-104 -mt-52 -ml-52 mr-0 mb-0"
          ></div>
          <div
            id="shape3"
            class="absolute transform rounded-full bg-yellow-200 w-80 h-80 -mt-40 -ml-40  mr-0 mb-0"
          ></div>
        </div>
      </div>
      <div class="h-screen w-screen absolute  item-center justify-center flex top-0 left-0   ">
        <div class="absolute  mix-blend-screen bg-white w-full h-80 mt-60 md:mt-80">
          <h1 className="m-0  text-center text-5xl  lg:text-7xl  tracking-wide text-red-500  font-black ">
            {tittle}
          </h1>
        </div>
      
      </div>
    </div>
  );
};

export default SpotlightEffect;

// 
