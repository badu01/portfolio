import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { PacmanLoader } from "react-spinners";

function Loading() {
    const [color,setColor] = useState('#1f1f1f')
    useEffect(()=>{
        console.log(color);
        
        const timer = setTimeout(()=>{
            setColor('#CFEF00')
        },4400)
        return ()=>clearTimeout(timer)
    })
  return (
    <>
      <section id="loading">
        <div className={` h-screen z-[9999] flex justify-center items-center transition-all ease-in-out duration-500 cursor-none`}
        style={{backgroundColor: color}}>
          <div className="flex flex-col justify-center gap-16">
            <PacmanLoader color="#CFEF00" />
          </div>
          <div className="absolute bottom-10 lg:bottom-36 text-green-main text-xl">
          <CountUp
            className="text-green-main text-4xl"
            end={100}
            duration={5}
            />%
          </div>
        </div>
      </section>
    </>
  );
}

export default Loading;
