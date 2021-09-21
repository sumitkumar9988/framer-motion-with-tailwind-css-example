import React from 'react'
import { motion } from "framer-motion";

const Index = () => {
    const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
 
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
    return (
        <div className="h-screen bg-gradient-to-r from-orange-400 to-rose-400 flex justify-center pt-40">
          <motion.div
            className="w-80 h-12 bg-white rounded-lg shadow-xl "
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <motion.div
              className="pt-16 w-full h-full "
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
                <div className="bg-gray-200 pt-2 pb-6 rounded-xl">
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2 "/>
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2 "/>
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2 "/>
                <div className="bg-white h-8 w-64 ml-8 rounded-lg shadow-lg mt-2 "/>
                </div>

            
            </motion.div>
          </motion.div>
        </div>
    )
}

export default Index
