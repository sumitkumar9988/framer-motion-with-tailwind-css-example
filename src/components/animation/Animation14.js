import React from "react";
import { motion,  } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <div className="  h-2xscreen w-screen bg-gradient-to-r from-orange-400 to-rose-400 flex overflow-x-hidden items-center justify-center">
      <div className=" ">
        <div className="sticky top-0 w-120 h-40 ">
          <motion.div
            className=" bg-white  w-full h-full  border-lg rounded-lg overflow-auto"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
