import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const containerRef = useRef();
  return (
    <div ref={containerRef} className="h-screen bg-gradient-to-r from-orange-400 to-rose-400 flex justify center items-center overflow-hidden">
      <motion.div
        className="flex flex-row "
        drag="x"
        dragConstraints={containerRef}
       
      >
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>
       <div className="w-60 h-80 bg-white p-4 m-4 shadow-xl rounded-xl cursor-grab "/>


      </motion.div>
    </div>
  );
};

export default Index;
