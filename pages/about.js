import Head from "next/head";
import Link from "next/link";
import SiteFrame from "../components/SiteFrame";

const profileRows = [
  ["Base", "Seoul, South Korea"],
  ["Field", "Portrait / Product / Brand Image"],
  ["Role", "Photography / Direction / Retouching"],
  ["Output", "Campaign / Lookbook / Web / Social"],
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <Head>
        <title>About - KWON JINCHAN</title>
        <meta
          name="description"
          content="About KWON JINCHAN, a Seoul based photographer working across portrait, product, and brand imagery."
        />
      </Head>

      <section className="px-4 py-8 md:px-6 md:py-14">
        <div className="mb-8 flex items-start justify-between gap-5 md:mb-12 md:gap-6">
          <div className="flex items-start gap-3">
            <h1 className="text-6xl font-black uppercase leading-[0.78] sm:text-7xl md:text-[9vw]">
              About
            </h1>
            <span className="font-mono text-xs font-bold leading-none md:mt-2 md:text-lg">
              [02]
            </span>
          </div>
          <p className="hidden max-w-xs pt-2 font-mono text-[11px] uppercase leading-relaxed text-[#5f5b55] md:block">
            Light, structure, distance, and tone.
          </p>
        </div>

        <div className="grid gap-6 border-y border-[#111] py-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:py-14">
          <p className="font-mono text-[11px] uppercase">Profile</p>
          <div className="space-y-6 md:space-y-8">
            <p className="max-w-5xl text-2xl font-black uppercase leading-[1.02] sm:text-3xl md:text-[6vw] md:leading-[0.92]">
              I make images that leave the subject clear, quiet, and precise.
            </p>
            <p className="max-w-3xl text-base font-semibold leading-relaxed md:text-3xl md:leading-snug">
              서울을 기반으로 인물, 제품, 브랜드 이미지를 촬영합니다. 과한 장식보다 빛의 방향,
              피사체의 태도, 이미지가 놓일 매체의 구조를 먼저 정리합니다.
            </p>
          </div>
        </div>

        <section className="grid gap-px bg-[#111] p-px md:grid-cols-4">
          {profileRows.map(([label, value]) => (
            <div key={label} className="bg-[#f6f3ec] p-4 md:p-6">
              <p className="mb-6 font-mono text-[10px] uppercase text-[#5f5b55] md:mb-10 md:text-[11px]">
                {label}
              </p>
              <p className="text-xl font-black uppercase leading-tight md:text-3xl md:leading-none">
                {value}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 py-12 md:grid-cols-[1fr_1fr] md:gap-10 md:py-24">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase text-[#5f5b55]">Less</p>
            <h2 className="text-4xl font-black uppercase leading-none md:text-7xl">
              Remove Noise
            </h2>
          </div>
          <div className="space-y-5 text-base font-semibold leading-relaxed md:space-y-8 md:text-2xl md:leading-snug">
            <p>
              배경, 컬러, 포즈, 조명을 필요한 만큼만 남깁니다. 이미지가 말해야 할 한 가지를
              먼저 정하고 그 외의 요소는 덜어냅니다.
            </p>
            <p>
              인물은 인물답게, 제품은 제품답게 보이도록 촬영 전 기획부터 후보정 톤까지
              하나의 기준으로 맞춥니다.
            </p>
          </div>
        </section>

        <section className="border-t border-[#111] py-10 md:py-12">
          <Link
            href="/contact"
            className="flex items-center justify-between gap-5 font-mono text-[11px] uppercase transition hover:opacity-50"
          >
            <span>Start a Project</span>
            <span>[ Contact ]</span>
          </Link>
        </section>
      </section>
    </SiteFrame>
  );
}
