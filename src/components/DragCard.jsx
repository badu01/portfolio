import React from "react";
import { motion } from "framer-motion";

function DragCard({ title, index, constraintRef,imgsrc }) {
  return (
    <motion.div
      className="w-60 absolute bg-black-main  lg:w-96 lg:h-fit top-1/3 left-1/3 cursor-drag_green"
      initial={window.innerWidth <=1080 ? {x:(-index * 10)-2, y:(index * 10)} : {x:(index * 10), y:-index * 10}}
      drag
      dragConstraints={constraintRef}
    >
      <div className="py-1">
        <div className="mx-1 ">
          <img src={imgsrc} alt=""  draggable="false"/>
        </div>
        <h1 className="text-sm text-green-main lg:text-lg font-black mx-2">
          {title}
        </h1>
      </div>
    </motion.div>
  );
}

export default DragCard;
