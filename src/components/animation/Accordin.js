import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ContentPlaceholder } from "./ContentPlaceholder";

const Index = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="h-screen bg-gradient-to-r from-orange-400 to-rose-400 flex pt-40 justify-center  ">
      <div>
        <div className="block">
          <motion.div
            className="h-20 w-80 rounded-lg shadow-xl block"
            initial={false}
            animate={{ backgroundColor: expanded ? "#212F3D" : "#FDFEFE" }}
            onClick={() => setExpanded(expanded ? false : true)}
          />
        </div>
        <div className="block">
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                className=" overflow-hidden  mt-4 block"
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 1, ease: [0.04, 0.6, 0.2, 0.95] }}
              >
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2   "/>
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2   "/>
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2   "/>
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2   "/>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
    </div>
  );
};

export default Index;
