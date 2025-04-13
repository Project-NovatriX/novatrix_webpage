"use client";
import React, { useEffect, useRef, useState } from 'react';

const Hero2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20 overflow-hidden relative"
    >
      <div className="max-w-7xl w-full px-8 grid grid-cols-1 md:grid-cols-[45%_55%] gap-24 relative after:content-[''] after:absolute after:left-1/2 after:top-4 after:bottom-4 after:w-[2px] after:bg-blue-400">
        <div
          className={`flex justify-center md:justify-end items-center overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <h2 className="text-blue-600 dark:text-blue-300 text-center">
            <span className="block text-4xl md:text-5xl font-semibold origin-left">
              What is
            </span>
            <span className="block text-7xl md:text-8xl font-bold mt-2 origin-right">
              NovatriX?
            </span>
          </h2>
        </div>
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <p className="text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
            とある高校生が設立した学生団体です。<br />ゲーム制作、プロダクト制作、映像コンテンツなどの作成を行っています。<br />詳しくは以下から御覧ください。
          </p>
          <a
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow transition-colors"
          >
            NovatriXについて詳しく
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero2;