import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-gradient-to-r from-orange-400 to-rose-400 flex  items-center justify-center h-screen ">
      <motion.div
        animate={{ opacity: modal ? 0.5 : 1 }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="bg-white h-12 w-40 rounded-lg shadow-xl transform hover:scale-125 transition duration-200"
        onClick={() => setModal(!modal)}
      />

      <AnimatePresence>
        {modal && (
          <div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute z-10 h-60 bg-gray-100 w-6/12 rounded-xl shadow-xl"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              onClick={() => setModal((modal) => !modal)}
              className="bg-transparent  fixed h-full w-full flex items-center justify-center top-0 left-0"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
