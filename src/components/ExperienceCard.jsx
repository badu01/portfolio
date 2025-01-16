import React, { useRef } from "react";
import { motion } from "framer-motion";

function ExperienceCard(props) {
  const experienceCardRef = useRef(null);
  const { title, year, desc} = props;
  return (
    <>
      <div className="overflow-hidden" key={title}>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: .5 }}
          className="h-fit py-4 lg:flex border-b border-black-main px-3 lg:h-28 items-center justify-between hover:bg-black-main hover:text-White-main transition-all ease-in-out duration-100"
          ref={experienceCardRef}
        >
          <h1 className="text-lg font-extrabold lg:text-2xl lg:w-[500px]">
            {title}
          </h1>
          <h1 className="font-medium">{year}</h1>
          <h1 className="text-sm font-bold lg:max-w-[500px]">{desc}</h1>
        </motion.div>
      </div>
    </>
  );
}

export default ExperienceCard;
