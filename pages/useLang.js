// pages/useLang.js
import { useEffect, useState } from "react";

export function useLang() {
  const [lang, setLang] = useState("ko");

  // 첫 로딩 시 localStorage에서 언어 복원
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

  return [lang, updateLang];
}