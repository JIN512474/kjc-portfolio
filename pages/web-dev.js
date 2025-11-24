// pages/web-dev.js
import React from "react";
import Head from "next/head";
import { useLang } from "../components/useLang";

const SITE = {
  name: "KWON JINCHAN",
};

function Header({ lang, setLang }) {
  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-100">
        <a
          href="/"
          className="font-medium text-[11px] md:text-xs hover:text-neutral-300 transition"
        >
          {SITE.name}
        </a>

        <div className="flex items-center gap-6">
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
      </div>
    </header>
  );
}

export default function WebDev() {
  const [lang, setLang] = useLang();

  return (
    <>
      <Head>
        <title>Web Development — KWON JINCHAN</title>
      </Head>

      <div className="min-h-screen bg-black text-neutral-50">
        <Header lang={lang} setLang={setLang} />

        <main className="px-6 pt-20 pb-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-[40px] md:text-[60px] font-semibold mb-10">
              WEB DEVELOPMENT
            </h1>

            <p className="text-neutral-300 mb-8 text-sm md:text-base max-w-xl leading-relaxed">
              {lang === "ko"
                ? "현재 작업 중인 웹페이지의 레이아웃을 미리보기 형태로 보여드립니다."
                : "Preview of in-progress website layouts and front-end work."}
            </p>

            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-neutral-800 shadow-xl">
              <iframe
                src="https://kim-su-rin-portfolio.vercel.app/#/home"
                className="w-full h-full"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}