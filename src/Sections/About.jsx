import React from "react";
import { motion } from "framer-motion";
import { GrDownload } from "react-icons/gr";
import Sign from "../assets/svgs/Sign";
import DownloadCV from "../assets/svgs/DownloadCV";
import AboutImg from "../assets/images/aboutImage.png";

function About() {
  return (
    <>
      <section id="about">
        <div className="bg-White-main h-screen align-middle px-6 py-7 lg:py-12 snap-start cursor-round_green">
          <div className="text-center items-center bg-[#232323]  h-full  flex xl:pt-0 lg:overflow-clip">
            <div className="h-fit m-5">
              <h1 className=" text-green-main font-extrabold text-2xl md:text-5xl">
                about me
              </h1>
              <p className="text-sm md:text-xl text-white font-medium pt-4">
                I'm a Computer Science Engineering student skilled in
                <span className="text-green-main">
                  {" "}
                  web development, mobile app development with Flutter, React &
                  Tailwind CSS.
                </span>{" "}
                As a former IEDC Creative Lead during my diploma, I excel in
                leadership & teamwork.
                <br />
                <br /> I’m also a passionate graphic designer & UI/UX
                enthusiast, always eager to learn and push my creative limits
              </p>
              <div className="w-full bg-green-main h-[1px] my-2"></div>
              <div className="grid grid-cols-1 text-White-main font-medium md:grid-cols-2 md:justify-items-start">
                <h1 className="text-green-main">name</h1>
                <h1>badusha pareed</h1>
                <h1 className="text-green-main mt-2 md:mt-0">age</h1>
                <h1>23 years</h1>
                {/* <h1 className="text-green-main mt-2 md:mt-0">nationality</h1>
                    <h1>indian</h1> */}
                <h1 className="text-green-main mt-2 md:mt-0">phone</h1>
                <h1>(+91) 8078518872</h1>
                <h1 className="text-green-main mt-2 md:mt-0">mail</h1>
                <h1>badushapareeth777@gmail.com</h1>
              </div>
              <div className="w-full bg-green-main h-[.5px] mt-2"></div>
              <motion.div
                initial={{ visibility: "hidden" }}
                whileInView={{ visibility: "visible" }}
                className="flex justify-center"
              >
                <Sign className={"size-32 ml-28 lg:size-44 "} />
              </motion.div>
            </div>
            <div className="hidden xl:flex h-full w-full ">
              {<img src={AboutImg} alt="hero-image" className="object-cover" />}
            </div>
          </div>
          <a href="/Badusha_Pareed_CV.pdf"
          download='Badusha_Pareed_CV.pdf'
          target="_blank"
          rel="noopener noreferrer">
            <div className=" w-fit h-fit p-3 bg-green-main rounded-full relative bottom-28 -left-3 hover:cursor-pointer">
              <DownloadCV className={"size-28 lg:size-32"} />
              <GrDownload
                className={
                  "size-10 absolute top-[33%] left-[35%] fill-black-main"
                }
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
