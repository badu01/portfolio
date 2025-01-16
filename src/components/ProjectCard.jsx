import React from "react";
import {motion} from 'framer-motion'
import { FiArrowUpRight } from "react-icons/fi";
function ProjectCard(props) {
  const{
    title,
    desc,
    tools,
    year,
    src,
    link
  }=props
  return (
    <>
    <div className="overflow-hidden" key={title}>
      <motion.div 
      initial={{x:200,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:.5,ease:'easeIn'}}
      className="my-4">
        <div className="flex justify-between">
          <h1 className="text-green-main font-extrabold text-lg">
            {title}
          </h1>
          <h1>{year}</h1>
        </div>
        <hr />
        <motion.div 
        animate={{transition:'all'}}
        className="flex">
          {
            tools.map((tool, index) => <h1>{tool} {index !== (tools.length)-1 ? <>&nbsp;|&nbsp;&nbsp;</> : ''}</h1>)
          }
          
        </motion.div>
        <div className="mt-10">
          <h1>
            {desc}
          </h1>
        </div>
        <div className="mt-1 flex items-center">
          <a href={link} className="flex">
            <h1 className="font-bold text-sm text-green-main">
              view in <span>{src}</span>
            </h1>
          </a>
          <FiArrowUpRight className="text-green-main size-6" />
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default ProjectCard;
