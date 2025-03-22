"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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

const Hero4 = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const slideCount = projects.length;
    const slideWidth = container.scrollWidth / slideCount;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        let next = prev + 1;

        if (next >= slideCount) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          return 0;
        }

        container.scrollTo({
          left: slideWidth * next,
          behavior: "smooth",
        });

        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">プロジェクト紹介</h2>
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden snap-x snap-mandatory px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/3 snap-start box-border px-2">
            <motion.a
              href={project.link}
              className="group block overflow-hidden rounded-lg relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  sizes="100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-50"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base">{project.description}</p>
                </div>
              </div>
            </motion.a>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const Hero5 = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
        <p className="text-lg md:text-xl mb-8">
          ご質問やご相談がございましたら、ぜひお気軽にお問い合わせください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          お問い合わせフォームへ
        </Link>
      </div>
    </section>
  );
};

export { Hero4, Hero5 };