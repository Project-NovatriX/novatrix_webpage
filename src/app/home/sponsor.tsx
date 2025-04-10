"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function SponsorSection() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full flex flex-col justify-center items-center py-6 transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
      <p className="text-5xl md:text-6xl font-bold mb-6 text-center transition-colors duration-500">
        スポンサー様
      </p>
      <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-start">
          <a
            href="https://www.uniproject.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 flex-shrink-0 flex items-center mt-1 md:mt-3"
          >
            <Image
              src="/UniProject_lightmode.png"
              alt="スポンサー：UniProject"
              width={480}
              height={132}
              priority
              className="block dark:hidden"
            />
            <Image
              src="/Uniproject_darkmode.png"
              alt="スポンサー：UniProject"
              width={480}
              height={132}
              priority
              className="hidden dark:block"
            />
          </a>
          <div className="max-w-md flex items-center">
            <div className="mt-1">
              <p className="text-lg md:text-xl mb-2">
                UniProject様にサーバーのご提供、開発協力など幅広い面での支援をいただいております。
              </p>
              <p className="text-lg md:text-xl">
                日々のご協力に感謝いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
