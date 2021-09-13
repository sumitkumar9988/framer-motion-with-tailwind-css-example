import React from "react";
import { motion } from "framer-motion";

const Index = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
    transition:{ duration: 2 }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-orange-400 to-rose-400 overflow-hidden flex  justify-center items-center">
      <motion.ul
        className="rounded p-8 "
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.li class="mt-4 w-72 h-12 bg-white rounded-lg shadow-xl" variants={item}/>
        <motion.li class="mt-4 w-72 h-12 bg-white rounded-lg shadow-xl" variants={item}/>
        <motion.li class="mt-4 w-72 h-12 bg-white rounded-lg shadow-xl" variants={item}/>
        <motion.li class="mt-4 w-72 h-12 bg-white rounded-lg shadow-xl" variants={item}/>
        <motion.li class="mt-4 w-72 h-12 bg-white rounded-lg shadow-xl" variants={item}/>
      </motion.ul>
    </div>
  );
};

export default Index;
