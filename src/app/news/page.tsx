"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NewsItem {
  id: string | number;
  title: string;
  publishedAt?: string;
  body?: any;
  image?: {
    url: string;
  };
  author?: {
    email?: string;
  };
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news?depth=2");
        const data = await res.json();
        setNews(
          Array.isArray(data?.docs)
            ? data.docs.map((item: any) => ({
                id: item.id,
                title: item.title || "No Title",
                publishedAt: item.publishedAt || "",
                body: item.body || [],
                image: item.image?.url ? { url: item.image.url } : undefined,
                author: item.author || {},
              }))
            : []
        );
      } catch (error) {
        console.error("Fetch error:", error);
        setNews([{ id: 0, title: "Fetch error", publishedAt: "", body: [], image: undefined, author: {} }]);
      }
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
          <div
            key={item.id}
            className="flex justify-between items-start border-b border-gray-300 dark:border-gray-600 py-4"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 w-28 shrink-0">
              {item.publishedAt?.slice(0, 10) ?? "No Date"}
            </div>
            <div className="flex-1 px-4">
              <div className="text-xs mb-1 text-gray-500 dark:text-gray-400">お知らせ</div>
              <a
                href={`/news/${item.id}`}
                className="flex justify-between items-center group hover:opacity-80 transition"
              >
                <span className="font-semibold group-hover:underline">{item.title}</span>
                <span className="text-lg ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
