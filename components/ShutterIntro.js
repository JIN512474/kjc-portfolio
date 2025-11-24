// components/ShutterIntro.js
import React from "react";

export default function ShutterIntro() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
      {/* 배경 이미지 + 필름 느낌 */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/intro-bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* 중앙 텍스트 */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <span className="text-[11px] tracking-[0.35em] text-neutral-100 uppercase">
          KWON JINCHAN
        </span>
      </div>

      {/* 셔터 패널 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="shutter-panel shutter-left" />
        <div className="shutter-panel shutter-right" />
      </div>

      <style jsx>{`
        .shutter-panel {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(
              circle at center,
              rgba(24, 24, 24, 1) 0,
              rgba(0, 0, 0, 1) 60%
            ),
            #000;
        }
        .shutter-left {
          left: 0;
          transform-origin: right center;
          animation: shutter-open-left 1.6s ease-in-out forwards;
        }
        .shutter-right {
          right: 0;
          transform-origin: left center;
          animation: shutter-open-right 1.6s ease-in-out forwards;
        }
        @keyframes shutter-open-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes shutter-open-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}