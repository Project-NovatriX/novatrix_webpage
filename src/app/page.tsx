"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const images = ["/sample1.png", "/sample2.png", "/sample3.png"];

export default function Home() {
  const { theme } = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({
    about: false,
    products: false,
  });

  // 画像スライドショー（5秒ごとに変更）
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // スクロール時のフェードイン
  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const products = document.getElementById("products");

      if (about && about.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setVisibleSections((prev) => ({ ...prev, about: true }));
      }
      if (products && products.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setVisibleSections((prev) => ({ ...prev, products: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`relative w-full overflow-hidden ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* ヘッダーのスペース確保 */}
      <div className="h-[80px]" />

      {/* メインビジュアル */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src={images[currentImage]}
          alt="Dynamic Content"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-700"
        />

        {/* キャッチコピー */}
        <div className="absolute text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            見つけ、輝け
            <br />
            未来のお星さま
          </h1>
        </div>
      </section>

      {/* About セクション */}
      <section
        id="about"
        className={`mt-32 w-full px-6 max-w-6xl mx-auto transition-all duration-1000 ${
          visibleSections.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl font-semibold">About</h2>
          <p className="mt-4 text-lg">
            Project NovatriX は、未来のイノベーションを創造するプロジェクトです。
          </p>
          <Link href="/about" className="text-blue-400 hover:underline mt-4 block">
            詳しく見る
          </Link>
        </div>
      </section>

      {/* プロダクト セクション */}
      <section
        id="products"
        className={`mt-32 w-full px-6 max-w-6xl mx-auto transition-all duration-1000 ${
          visibleSections.products ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Our Products</h2>
          <p className="mt-4 text-lg">
            最新技術を活用したプロダクトをご紹介します。
          </p>
          <Link href="/products" className="text-blue-400 hover:underline mt-4 block">
            詳しく見る
          </Link>
        </div>
      </section>
    </main>
  );
}
