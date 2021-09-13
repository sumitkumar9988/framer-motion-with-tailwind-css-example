import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <div className="  h-1xscreen w-screen bg-gradient-to-r from-orange-400 to-rose-400 overflow-x-hidden">
      <div className=" ">
        <div className="sticky top-0     w-80 h-80 ">
          <motion.div
            className=" bg-white  w-full h-full  border-lg rounded-lg overflow-hidden"
            style={{
              scale,
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
