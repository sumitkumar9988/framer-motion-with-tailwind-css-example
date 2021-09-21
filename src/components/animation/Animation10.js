import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Index = () => {
    const data=[
        {
            id:1,
            name:"Anima Basak"
        },
        {
            id:2,
            name:"Mukul Aurora"
        } ,{
            id:3,
            name:"Kalinda Narayanan"
        }, {
            id:4,
            name:"Reva Khosla"
        }
    ]
  const [arr, setArr] = useState(data);
  console.log(arr)

  const animation = useAnimation();

  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-400 to-rose-400 ">
      <div>
        {arr.map(({ name, id }, i) => {

          return (
            <motion.p
              key={id}
              className="m-2 px-20 py-6 rounded-xl shadow-xl font-medium text-lg text-center leading-3 bg-white"
              custom={i}
              animate={animation}
              variants={item}
              onTap={async (e, info) => {
                await animation.start((j) => {
                  if (i === j) {
                    return {
                      opacity: 0,
                      x: -100,
                      transition: { delay: i * 0.3 },
                    };
                  } else {
                    return {
                      opacity: 1,
                    };
                  }
                });
                setArr(arr.filter((item) => item.id !== id));
              }}
            >
              <span>{name}</span>
            </motion.p>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
