"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FightType",
    description: "新感覚タイピングバトル",
    image: "/background1.png",
    link: "/projects/fighttype",
  },
  {
    title: "Masters Train",
    description: "超リアリティグラフィックで最高の運転体験を",
    image: "/background1.png",
    link: "/projects/masterstrain",
  },
  {
    title: "Sample Project 1",
    description: "これはサンプルプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
  {
    title: "Sample Project 3",
    description: "今後公開予定のプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
  {
    title: "Sample Project 4",
    description: "今後公開予定のプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
  {
    title: "Sample Project 5",
    description: "今後公開予定のプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
  {
    title: "Sample Project 6",
    description: "今後公開予定のプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
  {
    title: "Sample Project 7",
    description: "今後公開予定のプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
  {
    title: "Sample Project 8",
    description: "今後公開予定のプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
];

interface SlideProps {
  project: typeof projects[0];
}

const Slide: React.FC<SlideProps> = ({ project }) => (
  <motion.div
    className="flex-shrink-0 w-full px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <motion.a
      href={project.link}
      className="group block overflow-hidden rounded-lg relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            sizes="100vw"
            priority
            unoptimized
            className="object-cover w-full h-48 md:h-64 filter blur-sm brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm md:text-base">{project.description}</p>
        </div>
      </div>
    </motion.a>
  </motion.div>
);

const ProductsPage = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black text-black dark:text-white py-20 pb-32 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center">
        <h3 className="text-5xl md:text-6xl font-extrabold leading-snug">Coming Soon</h3>
        <p className="text-xl md:text-2xl mt-4 font-medium">公開までお待ちください</p>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
        制作したプロダクト
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-0">
          <div className="absolute inset-0 bg-white/60 dark:bg-black/50 backdrop-blur-sm z-10 pointer-events-none" />
          {projects.slice(0, 9).map((project, index) => (
            <Slide key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
