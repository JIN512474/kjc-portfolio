// components/useLang.js
import { useEffect, useState } from "react";

export function useLang() {
  const [lang, setLang] = useState("ko");

  // 첫 로딩 때 localStorage에서 언어 읽어오기
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("kjc-lang");
    if (saved === "ko" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const updateLang = (next) => {
    setLang(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("kjc-lang", next);
    }
  };

  // 페이지 쪽에서: const [lang, updateLang] = useLang();
  return [lang, updateLang];
}