import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

 const Index = () => {
  const y = useMotionValue(0);
  const ref = useRef(null);

  const [top, setTop] = useState(0);

  useEffect(() => {
    const viewportHeight = ref.current.offsetHeight;
    const contentHeight = ref.current.firstChild.offsetHeight;
    setTop(viewportHeight - contentHeight);
  }, []);

  return (
    <div className="h-screen w-screen relative bg-gradient-to-r from-orange-400 to-rose-400 overflow-hidden flex justify-center  items-center">
      <div className=" overflow-hidden h-96 w-80 " ref={ref}>
        <motion.div
          drag="y"
          dragConstraints={{ top, bottom: 0 }}
          className=" "
          style={{ y }}
        >
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
          <div className="bg-gray-100 rounded-xl shadow-lg  w-full py-8 mt-4" />
        </motion.div>
      </div>
    </div>
  );
};


export default Index;