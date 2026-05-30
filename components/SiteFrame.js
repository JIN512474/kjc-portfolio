import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { works } from "../data/works";

const navItems = [
  { label: "Home", href: "/" },
  { label: `Works [${String(works.length).padStart(2, "0")}]`, href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function useSeoulTime() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Seoul",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return time;
}

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SeoulClock() {
  const time = useSeoulTime();

  return <span>{time} GMT+9</span>;
}

export function SiteHeader({ theme = "light" }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";
  const headerClass = isDark
    ? "border-white/15 bg-[#050505] text-[#f6f3ec]"
    : "border-black/15 bg-[#f6f3ec]/95 text-[#111]";
  const borderClass = isDark ? "border-white/15" : "border-black/15";
  const mutedClass = isDark ? "text-[#aaa39a]" : "text-[#5f5b55]";

  return (
    <header className={`sticky top-0 z-50 border-b ${headerClass} backdrop-blur-xl`}>
      <div className="grid min-h-12 grid-cols-[1fr_auto] items-center gap-3 px-4 font-mono text-[10px] uppercase leading-none md:min-h-16 md:grid-cols-[1fr_auto_1fr] md:px-6 md:text-[11px]">
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => {
            const active = isActivePath(router.pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 transition hover:opacity-50"
              >
                {active && <span className="h-2 w-2 bg-current" />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link href="/" className="font-sans text-sm font-black uppercase tracking-normal transition hover:opacity-50 md:justify-self-center">
          KWON JINCHAN
        </Link>

        <div className="hidden items-center justify-end gap-5 text-right md:flex">
          <SeoulClock />
          <span className={mutedClass}>Seoul, South Korea</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="min-h-10 justify-self-end px-1 transition hover:opacity-50 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          [ {open ? "close" : "menu"} ]
        </button>
      </div>

      {open && (
        <div className={`min-h-[calc(100svh-3rem)] border-t ${borderClass} px-4 py-6 md:hidden`}>
          <nav className="flex flex-col gap-4 text-5xl font-black uppercase leading-[0.86]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="transition hover:opacity-50"
              >
                {item.label.replace(/\s\[\d+\]/, "")}
              </Link>
            ))}
          </nav>

          <div className={`mt-10 flex flex-col gap-2 font-mono text-[10px] uppercase ${mutedClass}`}>
            <SeoulClock />
            <span>Seoul, South Korea</span>
          </div>
        </div>
      )}
    </header>
  );
}

export function PageFooter({ theme = "light" }) {
  const isDark = theme === "dark";
  const borderClass = isDark ? "border-white/15" : "border-black/15";
  const mutedClass = isDark ? "text-[#aaa39a]" : "text-[#5f5b55]";

  return (
    <footer className={`border-t ${borderClass} px-4 py-5 font-mono text-[10px] uppercase md:px-6 md:text-[11px]`}>
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <span>KWON JINCHAN</span>
        <Link href="/works" className="transition hover:opacity-50 md:justify-self-center">
          View Works
        </Link>
        <span className={`${mutedClass} md:justify-self-end`}>
          Seoul, Korea - {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default function SiteFrame({ children, theme = "light", withFooter = true }) {
  const isDark = theme === "dark";

  return (
    <main className={isDark ? "min-h-screen bg-[#050505] text-[#f6f3ec]" : "min-h-screen bg-[#f6f3ec] text-[#111]"}>
      <SiteHeader theme={theme} />
      {children}
      {withFooter && <PageFooter theme={theme} />}
    </main>
  );
}
