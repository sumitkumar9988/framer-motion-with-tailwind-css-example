import React from "react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-orange-400 to-rose-400 overflow-hidden flex  justify-center items-center">
      <motion.div
        className="h-60 w-60 bg-white border-lg rounded-lg shadow-xl"
        animate={{ x: 100, rotate: 360 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default Index;
