"use client";

import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6">
          <p className="text-sm">&copy; 2025 Project-NovatriX. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Project-NovatriX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 flex items-center space-x-2"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/your-x"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 flex items-center space-x-2"
            >
              <FaXTwitter size={18} />
              <span>X(旧Twitter)</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 space-y-2 md:space-y-0 md:space-x-4">
          <nav className="flex space-x-4">
            <Link href="/privacy" className="hover:underline text-sm">プライバシーポリシー</Link>
          </nav>

          <p className="text-yellow-400 font-semibold text-center">
            Supported by{" "}
            <a
              href="https://www.uniproject.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              UniPro
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}