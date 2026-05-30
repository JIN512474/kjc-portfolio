import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SiteFrame from "./SiteFrame";

const categoryLinks = [
  { label: "All", href: "/works", value: "all" },
  { label: "People", href: "/works/people", value: "people" },
  { label: "Product", href: "/works/product", value: "product" },
];

export default function WorksGridPage({
  title = "Works",
  activeCategory = "all",
  items,
  description,
}) {
  const pageTitle = `${title} - KWON JINCHAN`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={
            description ||
            "Selected photography works by KWON JINCHAN: portrait, product, fashion, and brand projects."
          }
        />
      </Head>

      <SiteFrame>
        <section className="px-3 pb-8 pt-7 text-[#050505] md:px-3 md:pt-10">
          <div className="mb-8 flex items-start justify-between gap-4 md:mb-14 md:gap-6">
            <div className="flex items-start gap-3">
              <h1 className="works-title text-6xl font-black uppercase leading-[0.78] sm:text-7xl md:text-[8.4vw]">
                {title}
              </h1>
              <span className="font-mono text-xs font-bold leading-none md:mt-2 md:text-lg">
                [{String(items.length).padStart(2, "0")}]
              </span>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-4 pt-1 font-mono text-xs font-bold uppercase leading-[1.15] md:gap-5 md:text-lg">
              <nav className="text-right">
                {categoryLinks.map((link) => {
                  const active = activeCategory === link.value;

                  return (
                    <Link
                      key={link.value}
                      href={link.href}
                      className="flex items-center justify-end gap-1 transition hover:opacity-50"
                    >
                      {active && <span className="h-3 w-3 bg-[#050505]" />}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <span className="h-3 w-3 bg-[#050505]" />
                  <span>Grid</span>
                </div>
                <span>List</span>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3">
            {items.map((work, index) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-[#ddd] md:aspect-[3/4]"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={68}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority={index === 0}
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 bg-gradient-to-t from-[#f6f3ec]/85 to-transparent p-3 pt-16 font-mono text-xs font-bold uppercase leading-none text-[#111] md:bg-transparent md:p-4 md:text-lg md:text-[#2a2a2a] md:mix-blend-multiply">
                  <span>{work.no}</span>
                  <span className="max-w-[72%] text-right">{work.title}</span>
                </div>
              </Link>
            ))}
          </section>
        </section>
      </SiteFrame>
    </>
  );
}
