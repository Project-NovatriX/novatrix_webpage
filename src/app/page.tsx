"use client";
import React, { useState, useEffect } from "react";
import Hero1 from "./home/hero1";
import Hero2 from "./home/hero2";
import Hero3 from "./home/hero3";
import Hero4 from "./home/hero4";
import Hero5 from "./home/hero5";
import SponsorSection from "./home/sponsor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isHero2Visible, setIsHero2Visible] = useState(false);
  const [isHero3Visible, setIsHero3Visible] = useState(false);

  useEffect(() => {
    let progress = 0;
    const smoothProgressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        progress = prev + 0.1;
        if (progress >= 100) {
          clearInterval(smoothProgressInterval);
          return 100;
        }
        return progress;
      });
    }, 300);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/your-api-or-file-url", true);
    xhr.onload = () => setLoadingProgress(100);
    xhr.onerror = () => console.error("Failed to load resource");
    xhr.send();

    return () => {
      clearInterval(smoothProgressInterval);
      xhr.abort();
    };
  }, []);

  useEffect(() => {
    if (loadingProgress >= 100) {
      setIsLoading(false);
    }
  }, [loadingProgress]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHero2Visible(true);
      } else if (window.scrollY < 50) {
        setIsHero2Visible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsHero3Visible(true);
      } else {
        setIsHero3Visible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="animate-openCurtain" style={{ background: 'var(--background-gradient)' }}>
      <div className="relative">
        <Hero1 />
      </div>
      <div className={`hero2-section ${isHero2Visible ? 'visible' : 'hidden'} transition-all duration-700 ease-in-out`}>
        <Hero2 />
      </div>
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          isHero3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <Hero3 />
      </div>
      <div className="relative z-20">
        <SponsorSection />
      </div>
      <div className="relative z-20">
        <Hero4 />
      </div>
      <div className="relative z-20">
        <Hero5 />
      </div>
    </main>
  );
}