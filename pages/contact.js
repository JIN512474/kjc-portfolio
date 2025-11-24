// pages/contact.js
import React from "react";
import Head from "next/head";
import { useLang } from "./useLang";

const SITE = {
  name: "KWON JINCHAN",
};

function Header({ lang, setLang }) {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-neutral-200 text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between text-xs uppercase tracking-[0.25em]">
        <a
          href="/"
          className="font-medium text-[11px] md:text-xs hover:text-neutral-500 transition"
        >
          {SITE.name}
        </a>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-[10px] md:text-[11px] text-neutral-500">
            <a href="/" className="hover:text-neutral-900">
              {lang === "ko" ? "홈" : "Home"}
            </a>
            <a href="/portfolio" className="hover:text-neutral-900">
              {lang === "ko" ? "포트폴리오" : "Portfolio"}
            </a>
            <a href="/web-dev" className="hover:text-neutral-900">
              {lang === "ko" ? "웹개발" : "Web Dev"}
            </a>
            <a
              href="https://www.youtube.com/@Jin-t3q2z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900"
            >
              {lang === "ko" ? "유튜브" : "YouTube"}
            </a>
            <span className="text-neutral-900">
              {lang === "ko" ? "문의" : "Contact"}
            </span>
          </nav>

          <div className="flex items-center gap-1 text-[10px] md:text-[11px] text-neutral-500">
            <button
              onClick={() => setLang("ko")}
              className={
                lang === "ko"
                  ? "text-neutral-900"
                  : "hover:text-neutral-800"
              }
            >
              KR
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("en")}
              className={
                lang === "en"
                  ? "text-neutral-900"
                  : "hover:text-neutral-800"
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

export default function Contact() {
  const [lang, setLang] = useLang();

  return (
    <>
      <Head>
        <title>Contact — KWON JINCHAN</title>
      </Head>

      <div className="min-h-screen bg-white text-neutral-900">
        <Header lang={lang} setLang={setLang} />

        <main className="px-6 pt-12 pb-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-[28px] md:text-[34px] font-semibold mb-8 uppercase tracking-[0.22em]">
              {lang === "ko" ? "촬영 및 협업 문의" : "Bookings & Collaboration"}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm leading-relaxed">
              <div className="md:col-span-2 space-y-4 text-neutral-700">
                {lang === "ko" ? (
                  <>
                    <p>
                      브랜드, 아티스트, 개인 포트레이트 및 제품 촬영 등
                      프로젝트를 함께 고민합니다.
                      <br />
                      가능하다면 아래 정보를 함께 보내주시면 보다 빠르게
                      일정과 진행을 안내드릴 수 있습니다.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>브랜드명 / 담당자명</li>
                      <li>희망 촬영 날짜 및 시간대</li>
                      <li>촬영 컨셉 또는 레퍼런스 링크</li>
                      <li>사용 용도 (온라인, 오프라인, 캠페인 등)</li>
                    </ul>
                    <p className="text-xs text-neutral-500">
                      서울, 대한민국 기반으로 활동하며 인물, 제품, 패션
                      촬영을 중심으로 국내 및 해외 작업이 모두 가능합니다.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I work on portraits, product visuals and fashion campaigns
                      for brands, artists and individuals.
                      <br />
                      To help me respond quickly, please include the details
                      below in your first message.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Brand / contact name</li>
                      <li>Preferred shooting date &amp; time</li>
                      <li>Concept or reference links</li>
                      <li>Usage (online, print, campaign, etc.)</li>
                    </ul>
                    <p className="text-xs text-neutral-500">
                      Based in Seoul, Korea. Available for local and
                      international projects, focusing on portrait and product
                      work.
                    </p>
                  </>
                )}
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 mb-2">
                    Email
                  </h2>
                  <a
                    href="mailto:rwc13690@naver.com"
                    className="text-base underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800"
                  >
                    rwc13690@naver.com
                  </a>
                </div>

                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 mb-2">
                    Instagram
                  </h2>
                  <a
                    href="https://www.instagram.com/105__054?igsh=MWtsdHJyem9qYnV6aA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800"
                  >
                    @ 105__054
                  </a>
                </div>

                <div className="pt-6 text-xs text-neutral-500">
                  <p>서울, 대한민국</p>
                  <p className="mt-1">
                    © {new Date().getFullYear()} Kwon Jinchan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}