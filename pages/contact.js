// pages/contact.js
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useLang } from "../components/useLang";
import ShutterIntro from "../components/ShutterIntro";

const SITE = {
  name: "KWON JINCHAN",
};

function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  const label = (ko, en) => (lang === "ko" ? ko : en);

  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-100 relative">
        
        {/* LOGO */}
        <a
          href="/"
          className="font-medium text-[11px] md:text-xs hover:text-neutral-300 transition"
        >
          {SITE.name}
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-[10px] md:text-[11px] text-neutral-300">

            <a href="/" className="hover:text-neutral-50">
              {label("홈", "Home")}
            </a>

            <a href="/portfolio" className="hover:text-neutral-50">
              {label("포트폴리오", "Portfolio")}
            </a>

            <a href="/web-dev" className="hover:text-neutral-50">
              {label("웹개발", "Web Dev")}
            </a>

            {/* 🔥 유튜브 언어 전환 적용 */}
            <a
              href="https://www.youtube.com/@Jin-t3q2z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-50"
            >
              {label("유튜브", "YouTube")}
            </a>

            <span className="text-neutral-50">
              {label("문의", "Contact")}
            </span>
          </nav>

          {/* LANG SWITCHER */}
          <div className="flex items-center gap-1 text-[10px] md:text-[11px]">
            <button
              onClick={() => setLang("ko")}
              className={lang === "ko" ? "text-neutral-50" : "text-neutral-500 hover:text-neutral-200"}
            >
              KR
            </button>
            <span className="text-neutral-500">/</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-neutral-50" : "text-neutral-500 hover:text-neutral-200"}
            >
              EN
            </button>
          </div>
        </div>

        {/* MOBILE NAV TOGGLE */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-1 text-[10px]">
            <button
              onClick={() => setLang("ko")}
              className={lang === "ko" ? "text-neutral-50" : "text-neutral-500 hover:text-neutral-200"}
            >
              KR
            </button>
            <span className="text-neutral-500">/</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-neutral-50" : "text-neutral-500 hover:text-neutral-200"}
            >
              EN
            </button>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-7 h-7 flex flex-col items-center justify-center gap-[3px] border border-neutral-600 rounded-sm"
          >
            <span className="w-4 h-[1px] bg-neutral-100" />
            <span className="w-4 h-[1px] bg-neutral-100" />
            <span className="w-4 h-[1px] bg-neutral-100" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-neutral-800">
            <div className="px-6 py-4 flex flex-col gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-200">
              <a href="/" onClick={() => setOpen(false)}>{label("홈", "Home")}</a>
              <a href="/portfolio" onClick={() => setOpen(false)}>{label("포트폴리오", "Portfolio")}</a>
              <a href="/web-dev" onClick={() => setOpen(false)}>{label("웹개발", "Web Dev")}</a>

              {/* 🔥 여기에도 유튜브 언어 전환 적용 */}
              <a
                href="https://www.youtube.com/@Jin-t3q2z"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {label("유튜브", "YouTube")}
              </a>

              <span className="text-neutral-50">{label("문의", "Contact")}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default function ContactPage() {
  const [lang, setLang] = useLang();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const label = (ko, en) => (lang === "ko" ? ko : en);

  return (
    <div className="min-h-screen bg-black text-neutral-50 relative">
      <Head>
        <title>Contact — KWON JINCHAN</title>
      </Head>

      {showIntro && <ShutterIntro />}

      <Header lang={lang} setLang={setLang} />

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        
        <h1 className="text-[32px] md:text-[48px] font-semibold tracking-tight mb-10">
          {label("촬영 및 협업 문의", "Bookings & Collaboration")}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 text-sm md:text-[15px] leading-relaxed">
          
          {/* LEFT TEXT */}
          <div className="space-y-4 text-neutral-200">
            {lang === "ko" ? (
              <>
                <p>브랜드, 아티스트, 개인 포트레이트 및 제품 촬영 등 프로젝트를 함께 고민합니다.</p>
                <p>레퍼런스와 원하는 무드가 있다면 함께 보내주시면 더욱 정확한 상담이 가능합니다.</p>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  <li>· 브랜드/광고 캠페인 & 담당자 촬영</li>
                  <li>· 화보형 인물 촬영 및 스튜디오 세션</li>
                  <li>· 화보 온/오프라인 및 커머스용 제품 촬영</li>
                  <li>· 사용 용도 (온라인, 인쇄물, 캠페인 등)</li>
                </ul>
                <p className="mt-6 text-neutral-400 text-xs">
                  서울, 대한민국을 베이스로 국내 및 해외 촬영 협의 가능합니다.
                </p>
              </>
            ) : (
              <>
                <p>I collaborate on brand portraits, campaigns and product-focused works.</p>
                <p>Share references and preferred mood for accurate project alignment.</p>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  <li>· Brand / campaign portraits</li>
                  <li>· Editorial / studio portrait sessions</li>
                  <li>· Product photography for e-commerce & editorial</li>
                  <li>· For digital, print, campaign usage</li>
                </ul>
                <p className="mt-6 text-neutral-400 text-xs">
                  Based in Seoul · Available for global projects
                </p>
              </>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            
            {/* EMAIL */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">EMAIL</h2>

              {/* 🔥 새 이메일 적용 */}
              <a href="mailto:rwc13690@naver.com" className="text-[15px] hover:underline">
                rwc13690@naver.com
              </a>
            </div>

            {/* INSTAGRAM */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">
                INSTAGRAM
              </h2>
              <a
                href="https://www.instagram.com/105__054"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] hover:underline"
              >
                @105__054
              </a>
            </div>

            {/* NOTICE */}
            <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400">
              {label(
                "촬영 일정은 문의 후 확정되며, 스튜디오 대관이 필요한 경우 예산과 컨셉에 맞춰 별도 견적을 안내드립니다.",
                "Schedules are confirmed after consultation. Studio bookings can be arranged based on budget and concept."
              )}
            </div>
          </div>
        </div>

        <footer className="mt-16 text-[11px] text-neutral-500 uppercase tracking-[0.2em]">
          Seoul, Korea — © {new Date().getFullYear()} Kwon Jinchan
        </footer>
      </main>
    </div>
  );
}