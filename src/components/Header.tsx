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
    { key: "ホーム", en: "Home", path: "/", spacing: "ml-1 mr-1 min-w-[60px]" },
    // TODO: Update to 'https://about.novatrix-pj.com' when subdomain routing is ready
    { key: "私達について", en: "About", path: "/about", spacing: "ml-1 mr-1 min-w-[100px]" },
    { key: "プロダクト", en: "Products", path: "/products", spacing: "ml-1 mr-1 min-w-[100px]" },
    { key: "ブログ", en: "Blog", path: "/blog", spacing: "ml-1 mr-1 min-w-[40px]" },
    { key: "ニュース", en: "News", path: "/news", spacing: "ml-1 mr-1 min-w-[100px]" },
    { key: "メンバー", en: "member", path: "/member", spacing: "ml-1 mr-4 min-w-[50px]" },
    { key: "お問い合わせ", en: "Contact", path: "/contact", spacing: "ml-1 mr-1 min-w-[100px]" },
  ];

  return (
    <header className="bg-gray-900 text-white py-3 shadow-md w-full">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/full_logo.png" alt="Project-NovatriX Logo" className="h-12 w-auto" />
        </Link>
        <nav className="flex gap-x-1 flex-nowrap justify-end">
          {menuItems.map(({ key, en, path, spacing }) => (
            <Link
              key={key}
              href={path}
              className={`relative flex items-center justify-center text-base whitespace-nowrap ${spacing}`}
              onMouseEnter={() => setHovered({ ...hovered, [key]: true })}
              onMouseLeave={() => setHovered({ ...hovered, [key]: false })}
            >
              <span
                className={`absolute transition-opacity duration-300 ${
                  hovered[key] ? "opacity-0" : "opacity-100"
                }`}
              >
                {key}
              </span>
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