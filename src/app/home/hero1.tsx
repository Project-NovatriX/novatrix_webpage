"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

//  背景画像リスト
const backgrounds = [
  "/background1.png",
  "/background2.png",
  "/background3.png",
  "/background4.png",
  "/background5.png"
];

//  背景のクロスフェード + 初期拡大
const crossFadeVariants = {
  enter: { opacity: 0, scale: 1.1 },
  center: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 1.1, transition: { duration: 1, ease: "easeInOut" } }
};

// スムーズなマウスパララックスエフェクト
const useParallax = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; //  移動幅
      const y = (e.clientY / innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return { x: smoothX, y: smoothY };
};

const Hero1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { x, y } = useParallax(); // マウスフェクト

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 背景画像（拡大 → 縮小 + クロスフェード） */}
      <motion.div
        key={currentIndex}
        variants={crossFadeVariants}
        initial="enter"
        animate="center"
        exit="exit"
        style={{ x, y }} //  マウスカーソル動く
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

      {/* キャッチコピー（アニメーションなし） */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-12">
            
            {/* 日本語キャッチコピー（通常のテキスト） */}
            <div className="text-white text-7xl md:text-8xl font-bold text-left pl-32" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.75)" }}>
              <span className="block">輝け、</span>
              <span className="block">未来の新星たちよ</span>
            </div>

            {/* 英語キャッチコピー（通常のテキスト） */}
            <div className="text-white text-2xl md:text-3xl font-bold text-right pr-32" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.75)" }}>
              <span className="block">Shine on,</span>
              <span className="block">Pioneers of the Future.</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;