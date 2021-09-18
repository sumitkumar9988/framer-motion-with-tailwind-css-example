import React, { useState } from "react";
import { motion, useSpring } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);
  const x = useSpring(0, { stiffness: 400, damping: 40 });
  const width = 400;

  return (
    <motion.div
      className="bg-gradient-to-r from-orange-400 to-rose-400 flex flex-start justify-items-start overflow-hidden w-screen h-screen "
      onPan={(e, pointInfo) => {
        if (pointInfo.point.x < width) x.set(pointInfo.point.x - width)
      }}
      style={{touchAction:'none'}}
      onPanEnd={(e, pointInfo) => {
        if (Math.abs(pointInfo.velocity.x) > 1000 && !isOpen) {
          if (pointInfo.velocity.x > 0) {
            x.set(0)
          } else x.set(-width)
        } else {
          if (Math.abs(x.current) < width / 2) {
            x.set(0)
          } else {
            x.set(-width)
          }
        }
      }}
       
    >
      <motion.div
        className=" fixed m-12 justify-center top-0 cursor-pointer z-50"
        onTap={() => {
          console.log(isOpen);
          setOpen(!isOpen);
          isOpen ? x.set(-width) : x.set(0);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="#111"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </motion.div>

      <motion.div
        className="w-80 bg-white p-12 fixed h-screen rounded-lg shadow-2xl"
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
        initial={{ x: -width }}
        style={{ x }}
        
      >
        {/* item */}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
