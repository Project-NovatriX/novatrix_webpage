"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [hovered, setHovered] = useState<{ [key: string]: boolean }>({
    ホーム: false,
    プロジェクト: false,
    サービス: false,
    プロダクト: false,
    ブログ: false,
    FAQ: false,
    ニュース: false,
    お問い合わせ: false,
  });

  const menuItems = [
    { key: "ホーム", en: "Home", path: "/", spacing: "ml-0.3 mr-0.5 min-w-[60px]" },
    { key: "プロジェクト", en: "About", path: "/about", spacing: "ml-0.3 mr-0.3 min-w-[100px]" },
    { key: "プロダクト", en: "Products", path: "/products", spacing: "ml-0.3 mr-0.3 min-w-[100px]" },
    { key: "ブログ", en: "Blog", path: "/blog", spacing: "ml-0.3 mr-0.3 min-w-[70px]" },
    { key: "ニュース", en: "News", path: "/news", spacing: "ml-0.3 mr-0.3 min-w-[80px]" },
    { key: "メンバー", en: "member", path: "/faq", spacing: "ml-0.3 mr-0.3 min-w-[50px]" },
    { key: "お問い合わせ", en: "Contact", path: "/contact", spacing: "ml-0.3 mr-0.3 min-w-[100px]" },
  ];

  return (
    <header className="bg-gray-900 text-white py-5 shadow-md w-full">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="text-base font-bold whitespace-nowrap">
          Project-NovatriX
        </Link>

        {/* ナビゲーションメニュー */}
        <nav className="flex gap-x-1 flex-nowrap justify-end">
          {menuItems.map(({ key, en, path, spacing }) => (
            <Link
              key={key}
              href={path}
              className={`relative flex items-center justify-center text-base whitespace-nowrap ${spacing}`}
              onMouseEnter={() => setHovered({ ...hovered, [key]: true })}
              onMouseLeave={() => setHovered({ ...hovered, [key]: false })}
            >
              {/* 通常時の日本語 */}
              <span
                className={`absolute transition-opacity duration-300 ${
                  hovered[key] ? "opacity-0" : "opacity-100"
                }`}
              >
                {key}
              </span>

              {/* ホバー時の英語 */}
              <span
                className={`absolute transition-opacity duration-300 ${
                  hovered[key] ? "opacity-100" : "opacity-0"
                }`}
              >
                {key === "FAQ" ? "FAQ" : en}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;