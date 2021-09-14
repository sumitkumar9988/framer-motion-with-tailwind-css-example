import React, { useRef } from "react";
import { motion, useSpring, useViewportScroll } from "framer-motion";

const Index = () => {
  const textRef = useRef(null);
  const { scrollYProgress: viewportYprogress } = useViewportScroll();
  const viewportYspring = useSpring(viewportYprogress, { damping: 20 });

  return (
    <div
      ref={textRef}
      className="h-3xscreen bg-gradient-to-r from-orange-400 to-rose-400"
    >
      <div className="fixed w-full top-0 left-0">
        <motion.div style={{ scaleX: viewportYspring }} className="h-2 w-full overflow-hidden bg-blue-500 transform origin-left" />
      </div>
    </div>
  );
};

export default Index;
