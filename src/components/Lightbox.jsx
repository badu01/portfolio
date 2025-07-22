import React from "react";
import { motion, AnimatePresence } from "framer-motion";
//import { IoClose } from "react-icons/io5";

function Lightbox({ imgsrc, onClose }) {
  return (
    <AnimatePresence>
      {imgsrc && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close Button (optional) */}
          {/* <button
            className="absolute top-4 right-4 text-white text-4xl z-[110]"
            onClick={onClose}
          >
            <IoClose />
          </button> */}

          <motion.img
            src={imgsrc}
            alt="Enlarged certificate"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Lightbox;
