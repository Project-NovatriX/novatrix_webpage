"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-32">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center flex justify-center gap-3 flex-wrap">
        {["What", "is", "Project-NovatriX?"].map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        className="text-xl md:text-2xl text-center text-gray-700 dark:text-gray-300 mt-4"
      >
        NovatriXとは？
      </motion.p>
      
      <div className="relative flex items-center justify-center my-12">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-1 bg-gray-500 dark:bg-white w-1/2 origin-right"
        />
        <span className="relative z-10 text-2xl px-3">★</span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-1 bg-gray-500 dark:bg-white w-1/2 origin-left"
        />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start my-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold"
        >
          名前の由来
          <span className="block text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">The Meaning Behind the Name</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }} 
          className="space-y-6 text-left text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Novaには新星、新しいという意味をこめ、TrixにはMatrix、Trickの意味を込めました。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            名前の通り新たな奇跡、希望を持ってほしい意味が込められています。<br />
            世界が良くなる魔法をかけるお手伝いをします。
          </motion.p>
        </motion.div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start my-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
          className="text-4xl md:text-5xl font-bold"
        >
          活動内容
          <span className="block text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4 mb-8">What We Do</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} 
          className="w-full max-w-4xl space-y-8 text-left text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Project-NovatriXでは以下のような活動をしています。
          </motion.p>

          <ul className="space-y-4">
            <li>
              ● プログラミング
              <ul className="pl-6 space-y-1">
                <li>– Web開発</li>
                <li>– ゲーム開発</li>
                <li>– ツール開発</li>
                <li>– アプリ開発</li>
              </ul>
            </li>
            <li>
              ● 業務委託
              <ul className="pl-6 space-y-1">
                <li>– 動画編集</li>
                <li>– サムネイル制作</li>
              </ul>
            </li>
            <li>
              ● その他デジタルな創作活動
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start my-28"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} 
      >
        <motion.h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          主な取り組み・実績
          <span className="block text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">Major Initiatives & Achievements</span>
        </motion.h3>
        <motion.p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} 
        >
          Coming Soon<br />
          公開までお待ち下さい
        </motion.p>
      </motion.div>

      <motion.div 
        className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start my-28"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} 
      >
        <motion.h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          スポンサー様
          <span className="block text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">Supported by</span>
        </motion.h3>
        <motion.a 
          href="https://www.uniproject.jp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="inline-block">
            <Image
              src="/UniProject_lightmode.png"
              alt="UniProject"
              width={320}
              height={100}
              className="block dark:hidden"
            />
            <Image
              src="/Uniproject_darkmode.png"
              alt="UniProject"
              width={320}
              height={100}
              className="hidden dark:block"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutHero;
