"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const backgrounds = [
  "/background1.png",
  "/background2.png",
  "/background3.png",
  "/background4.png",
  "/background5.png"
];

const crossFadeVariants = {
  enter: { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } }
};

const useParallax = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 80 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 80 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 5;
      const y = (e.clientY / innerHeight - 0.5) * 5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return { x: smoothX, y: smoothY };
};

const shineVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

const futureStarVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

const englishLine1Variant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" }
  }
};

const englishLine2Variant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: "easeOut",
      staggerChildren: 0.05
    }
  }
};

const letterVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const Hero1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { x, y } = useParallax();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <motion.div
        key={currentIndex}
        variants={crossFadeVariants}
        initial="enter"
        animate="center"
        exit="exit"
        style={{ x, y }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={backgrounds[currentIndex]}
          alt="背景画像"
          layout="fill"
          objectFit="cover"
          priority
          className="w-screen h-screen brightness-75"
        />
      </motion.div>

      <motion.div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-12">
            <div className="text-white text-7xl md:text-8xl font-bold text-left pl-32">
              <motion.span variants={shineVariant} initial="hidden" animate="show" className="block">
                輝け、
              </motion.span>
              <motion.span variants={futureStarVariants} initial="hidden" animate="show" className="block">
                未来の新星たちよ
              </motion.span>
            </div>

            <div className="text-white text-2xl md:text-3xl font-bold text-right pr-32">
              <motion.span variants={englishLine1Variant} initial="hidden" animate="show" className="block">
                Shine on,
              </motion.span>
              <motion.span variants={englishLine2Variant} initial="hidden" animate="show" className="block">
                {"Pioneers of the Future.".split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariant}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero1;