import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";

const SmoothScroll = () => {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1.1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.1], [10, 0]);

  return (
    <div className="h-2xscreen bg-gradient-to-r from-orange-400 to-rose-400 flex justify-start  items-center flex-col overflow-hidden">
      <motion.div
        className="w-8/12 h-96 bg-white  rounded-lg mt-60"
        style={{  scale, rotateX,transformPerspective: 150 }}
      >
      </motion.div>
    </div>)
}

export default SmoothScroll
