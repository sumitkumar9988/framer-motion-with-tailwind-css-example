import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Index = (props) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <div className="h-screen bg-gradient-to-r from-orange-400 to-rose-400 flex  ">
      <div onClick={() => setToggled(!toggled)}>
        <AnimatePresence>
          {toggled ? (
            <motion.div
              key="1"
              initial={{ opacity: 0, y: 100, rotateX: 100 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -100, rotateX: -100 }}
              className="w-60 h-60 bg-white rounded-lg shadow-xl absolute "
              transition={{duration:.5}}

            ></motion.div>
          ):(
            <motion.div
              key="2"
              initial={{ opacity: 0, y: 100, rotateX: 100 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -100, rotateX: -100 }}
                transition={{duration:.5}}
              className="w-60 h-60 bg-purple-500 rounded-lg shadow-xl absolute  "
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
