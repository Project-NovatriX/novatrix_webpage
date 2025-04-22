"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function NewsDetailPage() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState<any>(null);
  const [otherNews, setOtherNews] = useState<any[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchNewsItem() {
      try {
        const res = await fetch(`http://172.16.130.1:3000/api/news/${id}?depth=2`);
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setNewsItem(data);
      } catch (error) {
        console.error("Error fetching news item:", error);
        setError(true);
      }
    }

    async function fetchOtherNews() {
      try {
        const res = await fetch(`http://localhost:3000/api/news?depth=1`);
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        const filtered = data.docs.filter((item: any) => item.id !== id);
        setOtherNews(filtered);
      } catch (error) {
        console.error("Error fetching other news:", error);
      }
    }

    if (id) {
      fetchNewsItem();
      fetchOtherNews();
    }
  }, [id]);

  if (error) return <p>記事の取得に失敗しました。</p>;
  if (!newsItem) return <p>読み込み中...</p>;

  const renderContent = (content: any) => {
    if (!content?.root?.children) return null;

    return content.root.children.map((block: any, index: number) => {
      const getText = (children: any[]) =>
        children?.map((child: any) => child.text || "").join("") || "";

      switch (block.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-4 leading-relaxed text-lg">
              {block.children?.map((child: any, i: number) =>
                child.type === "link" && child.fields?.url ? (
                  <a
                    key={i}
                    href={child.fields.url}
                    target={child.fields.newTab ? "_blank" : "_self"}
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    {getText(child.children)}
                  </a>
                ) : (
                  <span key={i}>{child.text}</span>
                )
              )}
            </p>
          );
        case "heading": {
          const Tag = block.tag || "h2";
          return (
            <Tag key={index} className="text-2xl md:text-3xl font-semibold my-6">
              {getText(block.children)}
            </Tag>
          );
        }
        case "upload":
          if (block.value?.url) {
            return (
              <div key={index} className="my-6">
                <img
                  src={block.value.url}
                  alt={block.value.alt || "Image"}
                  className="w-full h-auto rounded shadow"
                />
              </div>
            );
          }
          break;
        default:
          return null;
      }
    });
  };

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-24 px-6 md:px-12 lg:px-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {newsItem.title}
          </motion.h1>

          {newsItem.publishedAt && (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-right mb-6">
              {new Date(newsItem.publishedAt).toLocaleDateString()}
            </p>
          )}

          <div className="border-b border-gray-300 dark:border-gray-600 mb-10"></div>

          <div className="prose dark:prose-invert max-w-none">
            {renderContent(newsItem.body) || (
              <p className="text-gray-500">本文が見つかりませんでした。</p>
            )}
          </div>
        </motion.div>

        <aside className="w-full lg:w-1/3">
          <div className="border-l border-gray-300 dark:border-gray-700 pl-6">
            <h2 className="text-xl font-semibold mb-4">他のニュース</h2>
            {otherNews.length > 0 ? (
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {otherNews.map((news) => (
                  <li key={news.id}>
                    <a href={`/news/${news.id}`} className="hover:underline">
                      {news.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">他のニュース</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}