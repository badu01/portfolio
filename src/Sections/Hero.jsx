import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactTyped } from "react-typed";
import { easeInOut } from "framer-motion/dom";
import HeroImg from "../assets/images/Hero.png";
import HeroRound from "../components/motion/HeroRound";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [1, -550]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <>
      <section id="hero">
        <motion.div
          className="bg-green-main h-[200vh] overflow-clip cursor-round_black"
          ref={ref}
        >
          <motion.div className="h-screen sticky top-0">
            <motion.div
              className="grid content-center h-full"
              style={{ scale }}
            >
              {/* <h1 className="text-4xl md:text-9xl text-black-main font-smoothpixel">BADUSHA</h1> */}
              <ReactTyped
                strings={["BADUSHA"]}
                typeSpeed={150}
                cursorChar="."
                className="font-smoothpixel text-black-main text-center text-[100px] lg:text-[350px] xl:text-[400px]"
              />

              <h1 className="text-center font-dotgothic text-sm md:text-xl">
                [ developer + UI/UX designer + graphic designer ]
              </h1>
              <motion.div
                className="grid justify-items-center justify-center self-center w-full mt-56 md:mt-10 md:mb-5"
                initial={{ y: -7 }}
                animate={{ y: 0 }}
                transition={{ ease: easeInOut, duration: 1, repeat: Infinity }}
              >
                <h1 className="font-dotgothic text-sm">scroll down</h1>
                <svg
                  className="size-6 w-fit"
                  viewBox="0 0 76 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5816 63.1947C19.9423 79.1839 28.7305 90.0856 41.789 103.144L39.7206 105.213C27.515 93.007 16.5406 82.5858 0.520959 69.2553L6.5816 63.1947Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M75.5663 74.7206C61.1355 86.1706 51.2558 93.6535 39.7407 105.169L37.395 102.823C48.1579 92.06 57.2776 82.3129 68.6933 67.8476L75.5663 74.7206Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M44.7011 2.58C41.2664 21.3619 41.9381 85.501 40.6451 102.565L37.5263 101.944C38.7349 85.995 36.1371 20.3412 35.5629 0.761328L44.7011 2.58Z"
                    fill="#1F1F1F"
                  />
                </svg>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-fit h-fit absolute bottom-14 right-5  md:absolute md:right-36 md:bottom-28"
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            >
              <HeroRound />
            </motion.div>
            <motion.div className="flex justify-center" style={{ y }}>
              <img src={HeroImg} alt="heroimage" className="md:w-[40%]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
