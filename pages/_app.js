// pages/_app.js
import "../styles/globals.css";
import { useEffect, useState } from "react";
import ShutterIntro from "../components/ShutterIntro";

export default function MyApp({ Component, pageProps }) {
  const [showIntro, setShowIntro] = useState(true);

  // 사이트 최초 진입 시 1.6초 셔터 이펙트
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && <ShutterIntro />}
      <Component {...pageProps} />
    </>
  );
}