import React from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";

const Index = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -250]);
  return (
    <>
      <motion.div className="h-screen " style={{ y: y1, x: 0 }}>
        <img
          className="bg-cover bg-center"
          src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw5fHxsYXB0b3B8ZW58MHx8fHwxNjMxNTk4NjQ2&ixlib=rb-1.2.1&q=80&w=1080"
          alt=""
        />
      </motion.div>
      <motion.div
        className="h-screen bg-black"
        style={{ y: y2, x: 0 }}
        transition={{ type: "spring", restDelta: 0.5 }}
      />
    </>
  );
};

export default Index;
