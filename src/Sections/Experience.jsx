import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import ParallaxText from "../components/motion/ParallelScroll";
import { WorkExperience } from "../constants/WorkExp"; 
function Experience() {
  return (
    <>
      <section id="experience">
      <div className="w-full h-full bg-[#CFEF00] pt-8 cursor-round_black">
      <ParallaxText baseVelocity={-2}>experience-</ParallaxText>
      <ParallaxText baseVelocity={2}>experience-</ParallaxText>
      <div className="relative top-10">
        {
          WorkExperience.map((value,index)=> <ExperienceCard
          title={value.title}
          year={value.period}
          desc={value.desc}
          />)
        }
      </div>
      <div className="flex w-full justify-center mt-10">
        {
        //   logos.map((logo)=>
        //     <div className="mx-5">
        //       {logo.svg}
        //     </div>
        //   )
        }
        {
        // <LogoParallel baseVelocity={-2}/>
        }
      </div>
    </div>
      </section>
    </>
  );
}

export default Experience;
