import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Header from "../../components/Header";
import { getWorkBySlug, works } from "../../data/works";

export async function getStaticPaths() {
  return {
    paths: works.map((work) => ({
      params: { slug: work.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    return { notFound: true };
  }

  return {
    props: {
      work,
    },
  };
}

function DetailCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const hasMultipleImages = images.length > 1;
  const navButtonStyle = {
    textShadow:
      "0 0 14px rgba(246, 243, 236, 0.95), 0 0 2px rgba(17, 17, 17, 0.85)",
  };

  const goToSlide = (nextIndex) => {
    if (!trackRef.current) {
      return;
    }

    const normalizedIndex = (nextIndex + images.length) % images.length;

    trackRef.current.scrollTo({
      left: trackRef.current.clientWidth * normalizedIndex,
      behavior: "smooth",
    });
    setActiveIndex(normalizedIndex);
  };

  const handleScroll = () => {
    if (!trackRef.current) {
      return;
    }

    const nextIndex = Math.round(trackRef.current.scrollLeft / trackRef.current.clientWidth);
    setActiveIndex(Math.min(Math.max(nextIndex, 0), images.length - 1));
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="px-4 pb-5 md:px-6 md:pb-6">
      <div className="mb-3 flex items-center justify-between gap-4 font-mono text-[10px] uppercase md:mb-4 md:text-xs">
        <span>
          Image {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative">
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="absolute left-1 top-1/2 z-20 -translate-y-1/2 px-3 py-8 font-mono text-5xl font-light leading-none text-[#111] opacity-60 transition hover:opacity-100 md:left-6 md:text-7xl"
              style={navButtonStyle}
              aria-label="Previous image"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="absolute right-1 top-1/2 z-20 -translate-y-1/2 px-3 py-8 font-mono text-5xl font-light leading-none text-[#111] opacity-60 transition hover:opacity-100 md:right-6 md:text-7xl"
              style={navButtonStyle}
              aria-label="Next image"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </>
        )}

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {images.map((image, index) => (
            <figure key={image} className="min-w-full snap-center bg-[#e5e0d7] p-2 md:p-5">
              <div className="relative h-[calc(100svh-12rem)] min-h-[360px] w-full md:h-[calc(100vh-10rem)] md:min-h-[620px]">
                <Image
                  src={image}
                  alt={`${title} frame ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WorkDetail({ work }) {
  const pageTitle = `${work.title} - KWON JINCHAN`;
  const gallery = Array.from(new Set(work.gallery || [work.image]));
  const categoryHref = work.category ? `/works/${work.category}` : "/works";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={work.description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={work.description} />
      </Head>

      <main className="min-h-screen bg-[#f3f1ec] text-[#111]">
        <Header />

        <section className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 font-mono text-[10px] uppercase md:px-6 md:py-4 md:text-xs">
          <Link href={categoryHref} className="whitespace-nowrap transition hover:opacity-40">
            [ back ]
          </Link>
          <h1 className="min-w-0 truncate text-center">{work.title}</h1>
          <span className="whitespace-nowrap">[{String(gallery.length).padStart(2, "0")}]</span>
        </section>

        <DetailCarousel images={gallery} title={work.title} />
      </main>
    </>
  );
}
