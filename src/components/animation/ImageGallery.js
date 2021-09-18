import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    data: "Item 1",
  },
  {
    id: 2,
    data: "Item 2",
  },
  {
    id: 3,
    data: "Item 3",
  },
  {
    id: 4,
    data: "Item 4",
  },
  {
    id: 5,
    data: "Item 5",
  },
];

const Index = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const length = data.length;

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
 
  const paginate = (newPage) => {
    if (page === 0 && newPage === -1) {
      return setPage([length - 1, newPage]);
    } else if (page === length - 1 && newPage === 1) {
      return setPage([0, newPage]);
    }
    setPage([page + newPage, newPage]);
  };

  return (
    <div className="h-screen w-screen relative bg-gradient-to-r from-orange-400 to-rose-400 overflow-hidden flex justify-center flex-col items-center">
      <div className="absolute top-2/4 mr-2 md:mr-12 right-0" onClick={() => paginate(1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="absolute top-2/4 ml-2 md:ml-12 left-0" onClick={() => paginate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
      <AnimatePresence initial={false} custom={direction}>
    
        <motion.div
          key={page}
          className="w-8/12 h-60 absolute bg-white rounded-lg shadow-lg"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <p className=" text-1xl items-center text-center pt-24  font-medium ">
            {data[page].data}
          </p>
        </motion.div>
      </AnimatePresence>
 
    </div>
  );
};

export default Index;
