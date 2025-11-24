// pages/web-dev.js
import React, { useState } from "react";
import Head from "next/head";
import { useLang } from "../components/useLang";

const SITE = {
  name: "KWON JINCHAN",
};

function Header({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-100">
        {/* 로고 */}
        <a
          href="/"
          className="font-medium text-[11px] md:text-xs hover:text-neutral-300 transition"
        >
          {SITE.name}
        </a>

        {/* 데스크톱 내비게이션 */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-[10px] md:text-[11px] text-neutral-300">
            <a href="/" className="hover:text-neutral-50">
              {lang === "ko" ? "홈" : "Home"}
            </a>

            <a href="/portfolio" className="hover:text-neutral-50">
              {lang === "ko" ? "포트폴리오" : "Portfolio"}
            </a>

            <span className="text-neutral-50">
              {lang === "ko" ? "웹개발" : "Web Dev"}
            </span>

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

          {/* 언어 스위치 */}
          <div className="flex items-center gap-1 text-[10px] md:text-[11px]">
            <button
              onClick={() => setLang("ko")}
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
              onClick={() => setLang("en")}
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

        {/* 모바일 상단 오른쪽 : 언어 + 햄버거 */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-[10px]">
            <button
              onClick={() => setLang("ko")}
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
              onClick={() => setLang("en")}
              className={
                lang === "en"
                  ? "text-neutral-50"
                  : "text-neutral-500 hover:text-neutral-200"
              }
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-[3px] border border-neutral-500 rounded-sm"
          >
            <span className="w-4 h-[1px] bg-neutral-100" />
            <span className="w-4 h-[1px] bg-neutral-100" />
            <span className="w-4 h-[1px] bg-neutral-100" />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black/95">
          <nav className="flex flex-col px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-neutral-100">
            <a
              href="/"
              className="py-2 border-b border-neutral-800 hover:text-neutral-300"
              onClick={() => setMenuOpen(false)}
            >
              {lang === "ko" ? "홈" : "Home"}
            </a>
            <a
              href="/portfolio"
              className="py-2 border-b border-neutral-800 hover:text-neutral-300"
              onClick={() => setMenuOpen(false)}
            >
              {lang === "ko" ? "포트폴리오" : "Portfolio"}
            </a>
            <span className="py-2 border-b border-neutral-800 text-neutral-400">
              {lang === "ko" ? "웹개발" : "Web Dev"}
            </span>
            <a
              href="https://www.youtube.com/@Jin-t3q2z"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 border-b border-neutral-800 hover:text-neutral-300"
              onClick={() => setMenuOpen(false)}
            >
              {lang === "ko" ? "유튜브" : "YouTube"}
            </a>
            <a
              href="/contact"
              className="py-2 hover:text-neutral-300"
              onClick={() => setMenuOpen(false)}
            >
              {lang === "ko" ? "문의" : "Contact"}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function WebDevPage() {
  const [lang, setLang] = useLang();

  const heading =
    lang === "ko" ? "웹 개발" : "WEB DEVELOPMENT";

  const projectTitle = "Kim Su Rin — Portfolio";

  const description =
    lang === "ko"
      ? "Next.js 기반으로 제작된, 사진 중심의 반응형 포트폴리오 웹사이트입니다. 최적화된 이미지 로딩과 부드러운 스크롤 UI를 제공합니다."
      : "A fully responsive, photography-driven portfolio built with Next.js, optimized image loading and smooth scrolling UI.";

  const buttonLabel =
    lang === "ko"
      ? "KIM SU RIN 포트폴리오 열기 ↗"
      : "OPEN KIM SU RIN PORTFOLIO ↗";

  return (
    <div className="min-h-screen bg-black text-neutral-50">
      <Head>
        <title>KWON JINCHAN — Web Development</title>
      </Head>

      <Header lang={lang} setLang={setLang} />

      <main className="px-6 pt-24 pb-20">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-[40px] md:text-[56px] font-semibold tracking-tight text-neutral-50 mb-10">
            {heading}
          </h1>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">
                Kim Su Rin
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-50">
                {projectTitle}
              </h2>
            </div>

            <p className="text-sm md:text-[15px] leading-relaxed text-neutral-200 mb-6">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.25em]">
              <a
                href="https://kim-su-rin-portfolio.vercel.app/#/home?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-neutral-100 hover:bg-neutral-50 hover:text-black transition"
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}