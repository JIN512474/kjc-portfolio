import Head from "next/head";
import Link from "next/link";
import SiteFrame from "../components/SiteFrame";

const contactRows = [
  ["Email", "rwc13690@naver.com", "mailto:rwc13690@naver.com"],
  ["Instagram", "@105__054", "https://www.instagram.com/105__054"],
  ["YouTube", "@Jin-t3q2z", "https://www.youtube.com/@Jin-t3q2z"],
];

const projectTypes = [
  "Portrait / Profile",
  "Product / Commerce",
  "Brand Campaign",
  "Lookbook / Editorial",
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <Head>
        <title>Contact - KWON JINCHAN</title>
        <meta
          name="description"
          content="Contact KWON JINCHAN for portrait, product, brand campaign, and editorial photography projects."
        />
      </Head>

      <section className="px-4 py-8 md:px-6 md:py-14">
        <div className="mb-8 flex items-start justify-between gap-5 md:mb-12 md:gap-6">
          <div className="flex items-start gap-3">
            <h1 className="text-5xl font-black uppercase leading-[0.82] sm:text-6xl md:text-[8.5vw] md:leading-[0.72]">
              Contact
            </h1>
            <span className="font-mono text-xs font-bold leading-none md:mt-2 md:text-lg">
              [04]
            </span>
          </div>
          <p className="hidden max-w-sm pt-2 font-mono text-[11px] uppercase leading-relaxed text-[#5f5b55] md:block">
            Bookings, collaborations, campaign and editorial projects.
          </p>
        </div>

        <div className="grid gap-6 border-y border-[#111] py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:py-14">
          <p className="font-mono text-[11px] uppercase">Project Request</p>
          <div className="space-y-6 md:space-y-8">
            <p className="max-w-5xl text-2xl font-black uppercase leading-[1.02] sm:text-3xl md:text-[5.7vw] md:leading-[0.92]">
              Send the mood, schedule, usage, and the images you need.
            </p>
            <p className="max-w-3xl text-base font-semibold leading-relaxed md:text-3xl md:leading-snug">
              촬영 목적, 레퍼런스, 사용 범위, 희망 일정과 예산을 함께 보내주시면 가장 빠르게
              방향을 잡을 수 있습니다.
            </p>
          </div>
        </div>

        <section className="grid gap-px bg-[#111] p-px md:grid-cols-3">
          {contactRows.map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-[#f6f3ec] p-4 transition hover:bg-[#111] hover:text-[#f6f3ec] md:p-6"
            >
              <p className="mb-6 font-mono text-[10px] uppercase text-[#5f5b55] group-hover:text-[#aaa39a] md:mb-10 md:text-[11px]">
                {label}
              </p>
              <p className="break-words text-xl font-black uppercase leading-tight md:text-3xl md:leading-none">
                {value}
              </p>
            </a>
          ))}
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:py-24">
          <p className="font-mono text-[11px] uppercase text-[#5f5b55]">Available For</p>
          <div className="grid gap-px bg-[#111] p-px md:grid-cols-2">
            {projectTypes.map((type) => (
              <div key={type} className="bg-[#f6f3ec] p-4 md:p-5">
                <p className="text-2xl font-black uppercase leading-tight md:text-5xl md:leading-none">
                  {type}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#111] py-10 md:py-12">
          <Link
            href="/works"
            className="flex items-center justify-between gap-5 font-mono text-[11px] uppercase transition hover:opacity-50"
          >
            <span>Before Contact</span>
            <span>[ View Works ]</span>
          </Link>
        </section>
      </section>
    </SiteFrame>
  );
}
