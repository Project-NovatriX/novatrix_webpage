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
    title: "Sample Project 2",
    description: "もう一つのサンプルプロジェクトです",
    image: "/background1.png",
    link: "#",
  },
];

interface SlideProps {
  project: typeof projects[0];
}

const Slide: React.FC<SlideProps> = ({ project }) => (
  <motion.div
    className="flex-shrink-0 w-full md:w-1/3 snap-start box-border px-2"
    custom={0}
    variants={{
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: { delay: i * 0.2 }
      })
    }}
  >
    <motion.a
      href={project.link}
      className="group block overflow-hidden rounded-lg relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          sizes="100vw"
          priority
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white p-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm md:text-base">{project.description}</p>
        </div>
      </div>
    </motion.a>
  </motion.div>
);

const Hero4 = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const slideCount = projects.length;
    const slideWidth = container.scrollWidth / slideCount;
    
    const handleScroll = () => {
      const currentPosition = container.scrollLeft;
      const targetPosition = Math.round(currentPosition / slideWidth) * slideWidth;
      
      if (targetPosition >= slideWidth * (slideCount - 1)) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setCurrentSlide(0);
      } else if (targetPosition <= 0) {
        container.scrollTo({
          left: slideWidth * (slideCount - 1),
          behavior: "smooth",
        });
        setCurrentSlide(slideCount - 1);
      } else {
        setCurrentSlide(Math.round(targetPosition / slideWidth));
      }
    };

    const interval = setInterval(() => {
      const currentPosition = container.scrollLeft;
      const nextPosition = currentPosition + slideWidth;
      
      if (nextPosition >= slideWidth * (slideCount - 1)) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentSlide(0);
      } else {
        container.scrollTo({ left: nextPosition, behavior: "smooth" });
        setCurrentSlide(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">制作したプロダクト</h2>
      <div className="relative">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h3 className="text-5xl md:text-6xl font-extrabold leading-snug">
              Coming Soon
            </h3>
            <p className="text-xl md:text-2xl mt-4 font-medium">公開までお待ちください</p>
          </div>
        </div>
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden snap-x snap-mandatory px-2 z-0"
        >
          {projects.map((project, index) => (
            <Slide key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero4;