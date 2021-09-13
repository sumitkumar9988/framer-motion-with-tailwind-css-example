import React, { useRef } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const ref = useRef(null);
  return (
    <div className="h-screen bg-gradient-to-r from-orange-400 to-rose-400 overflow-hidden flex  justify-center items-center" ref={ref}>
      <motion.div className="mt-4 w-60 h-60 bg-white rounded-full shadow-xl" drag dragConstraints={ref} />
    </div>
  );
};

export default Index;
