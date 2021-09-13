import React from "react"
import {
    motion, useViewportScroll
} from "framer-motion"

const SmoothScroll = () => {

    const { scrollY } = useViewportScroll();
    const [hidden, setHidden] = React.useState(false);
  
    function update() {
      if (scrollY?.current < scrollY?.prev) {
        setHidden(false);
      } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
        setHidden(true);
      }
    }
  
    React.useEffect(() => {
      return scrollY.onChange(() => update());
    });
  
    const variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -25 }
    };

  return (
    <>
      <div className="bg-gradient-to-r from-orange-400 to-rose-400 h-2xscreen">
      <motion.div
      className="h-20 bg-white w-full flex fixed items-center "
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
     {/* All item of nav like logo and link */}
      
    </motion.div>
      </div>
    
    </>
  )
}

export default SmoothScroll
