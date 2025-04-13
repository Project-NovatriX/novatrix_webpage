"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  category: string;
  slug: string;
};

const Hero3 = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://example.com/api/news?populate=*");
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("ニュースの取得に失敗しました", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">ニュース / News</h2>
          <Link href="/news">
            <span className="text-blue-600 dark:text-blue-400 hover:underline">more view →</span>
          </Link>
        </div>
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b border-gray-300 pb-2">
              <div className="flex space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">{item.date}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">{item.category}</span>
                <span className="text-md text-gray-900 dark:text-white font-semibold">{item.title}</span>
              </div>
              <Link href={`/news/${item.slug}`}>
                <span className="text-blue-600 dark:text-blue-400 hover:underline">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero3;
