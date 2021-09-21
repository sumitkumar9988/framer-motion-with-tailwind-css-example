import React, {useState} from 'react'
import { motion } from "framer-motion";

const Index = () => {

    const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

    return (
        <div className="h-screen w-screen relative bg-gradient-to-r from-orange-400 to-rose-400 overflow-hidden">
      <div className="bg-white flex relative py-6 px-6 z-50 justify-end shadow-xl">
        <motion.div
          className=""
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          whileHover={{ scale: 1.4 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#111"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        className="bg-white h-96  w-screen flex justify-center items-center text-center flex-col fixed top-0"
      >
        <motion.div variants={linkVariants} className="bg-gray-700 px-24 py-6 mt-4 rounded-xl shadow-lg" />
        <motion.div variants={linkVariants} className="bg-gray-700 px-24 py-6 mt-4 rounded-xl shadow-lg" />
        <motion.div variants={linkVariants} className="bg-gray-700 px-24 py-6 mt-4 rounded-xl shadow-lg" />

      </motion.div>
    </div>
    )
}

export default Index

