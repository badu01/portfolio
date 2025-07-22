import React, { useRef } from "react";
import { motion } from "framer-motion";

function DragCard({ title, index, constraintRef, imgsrc, setActiveImg }) {
  const pointerStart = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    const deltaX = Math.abs(e.clientX - pointerStart.current.x);
    const deltaY = Math.abs(e.clientY - pointerStart.current.y);

    // Adjust this threshold as needed
    const clickThreshold = 5;

    if (deltaX < clickThreshold && deltaY < clickThreshold) {
      setActiveImg?.(imgsrc); // Only open lightbox if it was a click
    }
  };

  return (
    <motion.div
      className="w-60 absolute bg-black-main lg:w-96 lg:h-fit top-1/3 left-1/3 cursor-drag_green"
      initial={
        window.innerWidth <= 1080
          ? { x: -index * 10 - 2, y: index * 10 }
          : { x: index * 10, y: -index * 10 }
      }
      drag
      dragConstraints={constraintRef}
      whileTap={{ scale: 0.97 }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="py-1">
        <div className="mx-1 ">
          <img src={imgsrc} alt={title} draggable="false" />
        </div>
        <h1 className="text-sm text-green-main lg:text-lg font-black mx-2">
          {title}
        </h1>
      </div>
    </motion.div>
  );
}

export default DragCard;
