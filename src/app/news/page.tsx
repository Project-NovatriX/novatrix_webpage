"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  published_at: string;
  slug: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/news?populate=*`);
      const data = await res.json();
      setNews(data.data);
    };
    fetchNews();
  }, []);

  return (
    <section className="px-6 py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        News / お知らせ
      </motion.h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        {news.map((item, i) => (
          <motion.a
            key={item.id}
            href={`/news/${item.slug}`}
            className="block border-b border-gray-300 dark:border-gray-600 pb-6 hover:opacity-80 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {item.published_at.slice(0, 10)}・{item.category}
            </div>
            <div className="text-xl font-semibold">{item.title}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
