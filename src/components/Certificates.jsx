import React, { useRef } from "react";
import { motion } from "framer-motion";
import DragCard from "./DragCard";
import { CertificateData } from "../constants/CertificateData";

function Certificates() {
  const constraintRef = useRef(null);
  return (
    <>
      <section id="certificates">
        <div className="overflow-clip ">
          <div className="w-screen h-screen bg-cert-pattern bg-cover cursor-drag_black">
            <motion.div
              className="absolute w-screen h-screen"
              ref={constraintRef}
            >
              {CertificateData.map((data, index) => (
                <DragCard
                  index={index}
                  title={data.title}
                  imgsrc={data.src}
                  constraintRef={constraintRef}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;
