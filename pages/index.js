// pages/index.js
import React from "react";
import Head from "next/head";
import { useLang } from "../components/useLang";
import Header from "../components/Header";

const SITE = {
  name: "KWON JINCHAN",
  cityKo: "서울, 대한민국",
  cityEn: "Seoul, Korea",
};

export default function Home() {
  const [lang, setLang] = useLang();
  const city = lang === "ko" ? SITE.cityKo : SITE.cityEn;

  const CATEGORIES = [
    "LOOKBOOK",
    "BEAUTY",
    "SPORTS",
    "PROFILE",
    "PHOTOGRAPHY",
    "PRODUCT",
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-50">
      <Head>
        <title>KWON JINCHAN — Portfolio</title>
      </Head>

      <Header lang={lang} setLang={setLang} />

      <main>
        <section className="relative w-full min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] overflow-hidden bg-black">
          {/* 배경 이미지 */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/flower-hero-glossy.png')" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.12)_0,_rgba(0,0,0,0.5)_55%,_rgba(0,0,0,0.75)_100%)]" />

          {/* 컨텐츠 */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-between py-10 md:py-14">
            <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-100">
              {city}
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
              <div className="flex-1 flex items-center">
                <h1 className="text-[46px] leading-none md:text-[80px] lg:text-[100px] xl:text-[112px] font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
                  LET&apos;S
                  <br />
                  WORK
                </h1>
              </div>

              <div className="w-full md:w-[320px] lg:w-[360px]">
                <p className="text-[13px] md:text-sm leading-relaxed text-neutral-100/90">
                  사람과 브랜드의 매력을
                  <br />
                  가장 자연스러운 순간으로 기록합니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs md:text-sm mt-6">
              <p className="max-w-xs md:max-w-sm text-neutral-200/90 leading-relaxed">
                Portraits, campaigns and product visuals crafted
                <br />
                for brands, artists and people.
              </p>
              <div className="flex items-center gap-4 md:gap-5 text-[11px] uppercase tracking-[0.25em]">
                <a
                  href="/portfolio"
                  className="border border-white/80 px-4 py-2 bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black transition"
                >
                  VIEW PORTFOLIO
                </a>
                <a
                  href="/contact"
                  className="underline underline-offset-4 decoration-white/70 hover:decoration-white hidden md:inline-block"
                >
                  BOOKINGS &amp; INQUIRIES
                </a>
              </div>
            </div>
          </div>

          {/* 하단 마퀴 */}
          <div className="absolute bottom-0 left-0 right-0">
            <MarqueeBar items={CATEGORIES} />
          </div>
        </section>
      </main>

      {/* 글로벌 스타일로 마퀴 애니메이션 */}
      <style jsx global>{`
        .marquee {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-track {
          display: inline-flex;
          align-items: center;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function MarqueeBar({ items }) {
  const sequence = [...items, " "].flatMap((item, idx) =>
    item === " "
      ? [{ key: `spacer-${idx}`, label: "•", spacer: true }]
      : [
          { key: `${item}-${idx}`, label: item },
          { key: `dot-${item}-${idx}`, label: "•", spacer: true },
        ]
  );

  return (
    <div className="marquee border-t border-neutral-700/70 bg-black/90 text-white">
      <div className="marquee-track py-3 md:py-4 text-[11px] md:text-xs uppercase tracking-[0.35em]">
        {[...Array(2)].map((_, loopIndex) => (
          <div
            key={loopIndex}
            className="flex items-center gap-6 md:gap-10 pr-10"
          >
            {sequence.map((item) => (
              <span
                key={`${loopIndex}-${item.key}`}
                className={
                  item.spacer
                    ? "text-neutral-500"
                    : "text-neutral-200 hover:text-white cursor-default select-none"
                }
              >
                {item.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}