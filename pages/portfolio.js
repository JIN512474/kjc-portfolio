// pages/portfolio.js
import React, { useState } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { useLang } from "../components/useLang";

const SITE = {
  name: "KWON JINCHAN",
};

// 숫자 우선 정렬 헬퍼 (폴더 & 파일 공통)
function sortByNumericName(list) {
  return [...list].sort((a, b) => {
    const nameA = String(a);
    const nameB = String(b);
    const na = parseInt(nameA.split(".")[0], 10);
    const nb = parseInt(nameB.split(".")[0], 10);
    const aIsNum = !isNaN(na);
    const bIsNum = !isNaN(nb);

    if (aIsNum && bIsNum) return na - nb;
    if (aIsNum && !bIsNum) return -1;
    if (!aIsNum && bIsNum) return 1;
    return nameA.localeCompare(nameB);
  });
}

export async function getStaticProps() {
  const publicDir = path.join(process.cwd(), "public");
  const series = [];

  function scanCategory(category, titlePrefix, metaText) {
    const basePath = path.join(publicDir, category);
    if (!fs.existsSync(basePath)) return;

    // 시리즈 폴더 정렬 (1,2,3,...10 순)
    const folderNamesRaw = fs
      .readdirSync(basePath)
      .filter((f) =>
        fs.lstatSync(path.join(basePath, f)).isDirectory()
      );

    const folderNames = sortByNumericName(folderNamesRaw);

    folderNames.forEach((folder) => {
      const folderPath = path.join(basePath, folder);

      let images = fs
        .readdirSync(folderPath)
        .filter((img) => img.match(/\.(jpg|jpeg|png|webp)$/i));

      if (images.length === 0) return;

      // 각 시리즈 안의 이미지도 숫자 기준 정렬
      images = sortByNumericName(images);

      const imageUrls = images.map(
        (img) => `/${category}/${folder}/${img}`
      );

      series.push({
        id: `${category}-${folder}`,
        type: category,
        cover: imageUrls[0],
        images: imageUrls,
        title: `${titlePrefix} ${folder}`,
        meta: metaText,
      });
    });
  }

  scanCategory("people", "Portrait Series", "PEOPLE · STUDIO");
  scanCategory("product", "Product Series", "PRODUCT · STUDIO");

  return { props: { series } };
}

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
            <span className="text-neutral-50">
              {lang === "ko" ? "포트폴리오" : "Portfolio"}
            </span>
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

export default function Portfolio({ series }) {
  const [lang, setLang] = useLang();
  const [filter, setFilter] = useState("people");
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filtered = series.filter((s) => s.type === filter);

  const openProject = (index) => {
    setActiveProjectIndex(index);
    setActiveImageIndex(0);
  };

  const closeLightbox = () => {
    setActiveProjectIndex(null);
    setActiveImageIndex(0);
  };

  const showPrev = () => {
    if (activeProjectIndex === null) return;
    const length = filtered[activeProjectIndex].images.length;
    setActiveImageIndex((prev) => (prev - 1 + length) % length);
  };

  const showNext = () => {
    if (activeProjectIndex === null) return;
    const length = filtered[activeProjectIndex].images.length;
    setActiveImageIndex((prev) => (prev + 1) % length);
  };

  return (
    <>
      <Head>
        <title>Portfolio — KWON JINCHAN</title>
      </Head>

      <div className="relative min-h-screen bg-black text-neutral-50 overflow-hidden">
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.18] mix-blend-soft-light"
          style={{
            backgroundImage: "url('/grain.png')",
            backgroundSize: "200px 200px",
          }}
        />

        <Header lang={lang} setLang={setLang} />

        <main className="relative px-6 pt-24 pb-20">
          <section className="max-w-6xl mx-auto">
            <h1 className="text-[40px] md:text-[64px] font-semibold tracking-tight text-neutral-50 mb-10">
              PORTFOLIO
            </h1>

            <div className="flex gap-3 mb-10 text-xs">
              <button
                onClick={() => setFilter("people")}
                className={
                  "px-3 py-1 border rounded-sm " +
                  (filter === "people"
                    ? "border-neutral-50 bg-neutral-50 text-black"
                    : "border-neutral-500 text-neutral-200 hover:border-neutral-200")
                }
              >
                {lang === "ko" ? "인물" : "People"}
              </button>
              <button
                onClick={() => setFilter("product")}
                className={
                  "px-3 py-1 border rounded-sm " +
                  (filter === "product"
                    ? "border-neutral-50 bg-neutral-50 text-black"
                    : "border-neutral-500 text-neutral-200 hover:border-neutral-200")
                }
              >
                {lang === "ko" ? "제품" : "Product"}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((p, index) => (
                <button
                  key={p.id}
                  onClick={() => openProject(index)}
                  className="group text-left"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-neutral-300">
                    {p.meta}
                  </div>
                  <div className="mt-1 text-sm text-neutral-50">
                    {p.title}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {activeProjectIndex !== null && (
            <Lightbox
              series={filtered}
              activeProjectIndex={activeProjectIndex}
              activeImageIndex={activeImageIndex}
              onClose={closeLightbox}
              onPrev={showPrev}
              onNext={showNext}
            />
          )}
        </main>
      </div>
    </>
  );
}

function Lightbox({
  series,
  activeProjectIndex,
  activeImageIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (activeProjectIndex === null) return null;

  const project = series[activeProjectIndex];
  const imageSrc = project.images[activeImageIndex];

  return (
    <div
      className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-3xl"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-5 text-white text-3xl"
      >
        ←
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-5 text-white text-3xl"
      >
        →
      </button>

      <div className="max-w-5xl w-[94vw] md:w-[80vw] flex items-center justify-center">
        <img
          src={imageSrc}
          alt={project.title}
          className="max-h-[88vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}