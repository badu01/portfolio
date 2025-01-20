import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { PacmanLoader } from "react-spinners";
import { ReactTyped } from "react-typed";

function Loading() {
    const [color,setColor] = useState('#000000')
    useEffect(()=>{        
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
            className="text-green-main font-extrabold text-4xl"
            end={100}
            duration={5}
            />%
          </div>
          <ReactTyped
          strings={["HI","HOW ARE YOU"]}
          typeSpeed={100}
          cursorChar="."
          className="hidden lg:flex text-black-main text-center font-extrabold text-4xl fixed bottom-0"/>
        </div>
      </section>
    </>
  );
}

export default Loading;
