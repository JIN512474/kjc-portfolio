import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PageFooter, SiteHeader } from "./SiteFrame";
import { works } from "../data/works";

function WorkCarousel({ title, href, items }) {
  return (
    <section className="border-t border-[#111] py-7 md:py-10">
      <div className="mb-5 flex items-center justify-between font-mono text-xs uppercase">
        <span>{title}</span>
        <Link href={href} className="transition hover:opacity-50">
          View all
        </Link>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto">
        {items.map((work, index) => (
          <Link
            key={work.slug}
            href={`/work/${work.slug}`}
            className="group min-w-[82vw] snap-start sm:min-w-[360px] md:min-w-[28rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd]">
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(min-width: 768px) 448px, 78vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                priority={index < 2}
              />
            </div>
            <div className="mt-3 flex items-start justify-between gap-4 font-mono text-xs uppercase">
              <span>{work.no}</span>
              <span className="max-w-[72%] text-right">{work.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioHome() {
  const [heroProgress, setHeroProgress] = useState(0);
  const peopleWorks = works.filter((work) => work.category === "people");
  const productWorks = works.filter((work) => work.category === "product");

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const limit = window.innerHeight;
      setHeroProgress(Math.min(window.scrollY / limit, 1));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>KWON JINCHAN - Photographer Portfolio</title>
        <meta
          name="description"
          content="A Seoul based photography portfolio for portrait, product, fashion, and brand image direction."
        />
        <meta property="og:title" content="KWON JINCHAN - Photographer Portfolio" />
        <meta
          property="og:description"
          content="Photography shaped through light, structure, and quiet direction."
        />
      </Head>

      <main className="bg-[#f6f3ec] text-[#111]">
        <SiteHeader theme="dark" />
        <section className="relative min-h-[calc(100svh-3rem)] overflow-hidden bg-[#050505] text-[#f6f3ec]">
          <div className="relative z-10 grid min-h-[calc(100svh-3rem)] grid-rows-[auto_1fr_auto] px-4 pt-8 md:min-h-[calc(100vh-4rem)] md:px-6 md:pt-16">
            <div className="flex justify-between font-mono text-[11px] uppercase text-[#b9b5ad]">
              <span>KWON JINCHAN - In Light</span>
              <span className="hidden md:inline">Photographer Portfolio</span>
            </div>

            <div className="relative flex items-center justify-center py-8 md:py-10">
              <div
                className="pointer-events-none absolute inset-x-[-2rem] top-1/2 -translate-y-1/2 text-center font-sans text-7xl font-black uppercase leading-none text-[#141414] sm:text-8xl md:text-[9rem] lg:text-[12rem]"
                style={{ transform: `translate3d(${heroProgress * 54}px, -50%, 0)` }}
              >
                Photographer
              </div>
              <div
                className="pointer-events-none absolute bottom-[14%] left-1/2 font-mono text-5xl uppercase leading-none text-[#101010] sm:text-6xl md:text-8xl"
                style={{ transform: `translate3d(calc(-50% - ${heroProgress * 42}px), 0, 0)` }}
              >
                KJC
              </div>

              <div className="pointer-events-none relative z-10 grid min-h-[52svh] w-full grid-cols-2 grid-rows-[1fr_auto_1fr] font-mono text-[10px] uppercase text-[#f6f3ec] md:min-h-[58vh] md:grid-cols-[1fr_auto_1fr] md:text-[11px]">
                <span className="self-start pt-5 text-[#b9b5ad] md:pt-10">Structure</span>
                <span className="hidden self-start justify-self-center pt-7 text-[#b9b5ad] md:block md:pt-10">
                  Intro
                </span>
                <span className="self-start justify-self-end pt-5 text-[#b9b5ad] md:pt-10">
                  LLL
                </span>

                <h1 className="col-span-2 row-start-2 mx-auto w-full overflow-hidden text-center font-sans text-[4.5rem] font-black uppercase leading-[0.74] sm:text-[5.5rem] md:col-span-3 md:text-[10.5rem] lg:text-[13.5rem] xl:text-[15.5rem]">
                  <span
                    className="block will-change-transform"
                    style={{ transform: `translate3d(${-heroProgress * 42}px, 0, 0)` }}
                  >
                    Less
                  </span>
                  <span
                    className="block will-change-transform"
                    style={{ transform: `translate3d(${heroProgress * 58}px, 0, 0)` }}
                  >
                    Light
                  </span>
                  <span
                    className="block will-change-transform"
                    style={{ transform: `translate3d(${-heroProgress * 34}px, 0, 0)` }}
                  >
                    Long
                  </span>
                </h1>
              </div>
            </div>

            <div className="grid gap-4 pb-4 font-mono text-[10px] uppercase md:grid-cols-[1fr_auto_1fr] md:items-end md:pb-1 md:text-[11px]">
              <span>KJC Photography</span>
              <Link href="#works" className="justify-self-start transition hover:opacity-50 md:justify-self-center">
                [ scroll down ]
              </Link>
              <p className="max-w-[18rem] text-left leading-relaxed text-[#b9b5ad] md:max-w-sm md:justify-self-end md:text-right">
                Portrait and product images shaped through light, structure, and quiet direction.
              </p>
            </div>
          </div>
        </section>

        <section id="works" className="px-4 py-12 md:px-8 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="mb-4 font-mono text-xs uppercase">Selected</p>
              <h2 className="text-4xl font-black uppercase leading-none md:text-7xl">
                Work
              </h2>
            </div>
            <Link href="/works" className="font-mono text-xs uppercase transition hover:opacity-50">
              All works
            </Link>
          </div>

          <WorkCarousel title="People" href="/works/people" items={peopleWorks} />
          <WorkCarousel title="Product" href="/works/product" items={productWorks} />
        </section>

        <section id="contact" className="border-t border-[#111] px-4 py-12 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase">Contact</p>
              <h2 className="text-4xl font-black uppercase leading-none md:text-7xl">
                Say Hello
              </h2>
            </div>
            <a
              href="mailto:rwc13690@naver.com"
              className="font-mono text-xs uppercase transition hover:opacity-50"
            >
              rwc13690@naver.com
            </a>
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
}
