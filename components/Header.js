// components/Header.js
import React, { useState } from "react";

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  const SITE = {
    name: "KWON JINCHAN",
  };

  const changeLang = (next) => {
    setLang(next);
  };

  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-100">
        {/* 로고 */}
        <a
          href="/"
          className="font-medium text-[11px] md:text-xs hover:text-neutral-300 transition"
        >
          {SITE.name}
        </a>

        {/* 데스크탑 네비게이션 */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-[10px] md:text-[11px] text-neutral-300">
            <a href="/" className="hover:text-neutral-50">
              {lang === "ko" ? "홈" : "Home"}
            </a>

            <a href="/portfolio" className="hover:text-neutral-50">
              {lang === "ko" ? "포트폴리오" : "Portfolio"}
            </a>

            <a href="/web-dev" className="hover:text-neutral-50">
              {lang === "ko" ? "웹개발" : "Web Dev"}
            </a>

            <a
              href="https://www.youtube.com/@Jin-t3q2z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-50"
            >
              {lang === "ko" ? "유튜브" : "YouTube"}
            </a>

            <a href="/contact" className="hover:text-neutral-50">
              {lang === "ko" ? "문의" : "Contact"}
            </a>
          </nav>

          {/* 언어 스위치 (PC) */}
          <div className="flex items-center gap-1 text-[10px] md:text-[11px]">
            <button
              onClick={() => changeLang("ko")}
              className={
                lang === "ko"
                  ? "text-neutral-50"
                  : "text-neutral-500 hover:text-neutral-200"
              }
            >
              KR
            </button>
            <span className="text-neutral-500">/</span>
            <button
              onClick={() => changeLang("en")}
              className={
                lang === "en"
                  ? "text-neutral-50"
                  : "text-neutral-500 hover:text-neutral-200"
              }
            >
              EN
            </button>
          </div>
        </div>

        {/* 모바일 언어 + 햄버거 */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-[10px]">
            <button
              onClick={() => changeLang("ko")}
              className={
                lang === "ko"
                  ? "text-neutral-50"
                  : "text-neutral-500 hover:text-neutral-200"
              }
            >
              KR
            </button>
            <span className="text-neutral-500">/</span>
            <button
              onClick={() => changeLang("en")}
              className={
                lang === "en"
                  ? "text-neutral-50"
                  : "text-neutral-500 hover:text-neutral-200"
              }
            >
              EN
            </button>
          </div>

          {/* 햄버거 버튼 */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation"
            className="w-8 h-8 flex flex-col items-center justify-center gap-[4px] border border-neutral-700 rounded-sm active:scale-95 transition"
          >
            <span
              className={`w-4 h-[1px] bg-neutral-100 transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-4 h-[1px] bg-neutral-100 transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-4 h-[1px] bg-neutral-100 transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black/95">
          <nav className="flex flex-col px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-neutral-200">
            <a href="/" className="py-1 hover:text-neutral-50">
              {lang === "ko" ? "홈" : "Home"}
            </a>

            <a href="/portfolio" className="py-1 hover:text-neutral-50">
              {lang === "ko" ? "포트폴리오" : "Portfolio"}
            </a>

            <a href="/web-dev" className="py-1 hover:text-neutral-50">
              {lang === "ko" ? "웹개발" : "Web Dev"}
            </a>

            <a
              href="https://www.youtube.com/@Jin-t3q2z"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 hover:text-neutral-50"
            >
              {lang === "ko" ? "유튜브" : "YouTube"}
            </a>

            <a href="/contact" className="py-1 hover:text-neutral-50">
              {lang === "ko" ? "문의" : "Contact"}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}