import React from "react";
import gsap from "gsap";
const SpotlightEffect = () => {
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
      ></div>
      <div class="relative h-screen w-screen bg-gray-600 overflow-hidden">
        <div className="absolute transform rounded-full">
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
      <div class=" top-0 left-0 absolute flex justify-center items-center h-screen w-screen bg-white mix-blend-screen">
        <h1 className="m-0  font-serif text-center text-5xl  lg:text-7xl  tracking-wide text-green-500  font-extrabold ">
          Tailwind Animation Kit
        </h1>
      </div>
    </div>
  );
};

export default SpotlightEffect;



