"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// 🌟 背景画像リスト
const backgrounds = [
  "/background1.png",
  "/background2.png",
  "/background3.png",
  "/background4.png",
  "/background5.png"
];

// 🎥 背景のクロスフェード + 初期拡大
const crossFadeVariants = {
  enter: { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } }
};

// 🎯 マウスパララックスエフェクト（控えめ）
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

// 🌟 「輝け」のアニメーション（スライドイン）
const shineVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

// 🌟 未来の新星たちよのアニメーション
const futureStarVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

// 🌍 **英語テキストのアニメーション**
// 📌 **1行目（"Shine on," の表示エフェクト → フェードイン & 下から浮き上がる）**
const englishLine1Variant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" }
  }
};

// 📌 **2行目（"Pioneers of the Future." を1文字ずつフェードイン → 速度アップ）**
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

// 🌟 2行目の各文字に適用するフェードインエフェクト
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
      {/* 🎥 背景画像 */}
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

      {/* 🏆 キャッチコピー */}
      <motion.div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-12">
            
            {/* 🌟 日本語キャッチコピー */}
            <div className="text-white text-7xl md:text-8xl font-bold text-left pl-32" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.75)" }}>
              
              {/* 🔥 「輝け」のエフェクト（スライドイン） */}
              <motion.span variants={shineVariant} initial="hidden" animate="show" className="block">
                輝け、
              </motion.span>

              {/* 未来の新星たちよ */}
              <motion.span variants={futureStarVariants} initial="hidden" animate="show" className="block">
                未来の新星たちよ
              </motion.span>
            </div>

            {/* 🌍 英語キャッチコピー（おしゃれなエフェクト） */}
            <div className="text-white text-2xl md:text-3xl font-bold text-right pr-32" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.75)" }}>
              {/* 📌 **1行目（"Shine on," → フェードイン & 下から浮き上がる） */}
              <motion.span variants={englishLine1Variant} initial="hidden" animate="show" className="block">
                Shine on,
              </motion.span>
              
              {/* 📌 **2行目（1文字ずつフェードイン） */}
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