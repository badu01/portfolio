import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DragCard from "./DragCard";
import { CertificateData } from "../constants/CertificateData";
import Lightbox from "./Lightbox"; // ✅ Import the lightbox

function Certificates() {
  const constraintRef = useRef(null);
  const [activeImg, setActiveImg] = useState(null); // ✅ Track the active image

  useEffect(() => {
    if (!constraintRef.current) {
      console.warn("Constraint ref is not properly set up");
    }
  }, []);

  return (
    <>
      <section id="certificates">
        <div className="overflow-hidden ">
          <div className="w-screen h-screen bg-cert-pattern bg-cover cursor-drag_black">
            <motion.div
              className="relative w-screen h-screen"
              ref={constraintRef}
            >
              {CertificateData.map((data, index) => (
                <DragCard
                  key={index}
                  index={index}
                  title={data.title}
                  imgsrc={data.src}
                  constraintRef={constraintRef}
                  setActiveImg={setActiveImg} // ✅ Pass this to handle clicks
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Render lightbox if image is selected */}
      <Lightbox imgsrc={activeImg} onClose={() => setActiveImg(null)} />
    </>
  );
}

export default Certificates;
