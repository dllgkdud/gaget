"use client";

import { useState } from "react";

export default function Home() {
  const [isMobileFrame, setIsMobileFrame] = useState(true);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-neutral-900 p-0 sm:p-4">
      {/* 화면 모드 전환 컨트롤 버튼 */}
      <button
        onClick={() => setIsMobileFrame(!isMobileFrame)}
        className="fixed top-4 right-4 z-50 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-medium text-white border border-white/20 hover:bg-white/20 transition-all"
      >
        {isMobileFrame ? "Full Web View" : "Device Frame View"}
      </button>

      {/* 메인 디바이스 프레임 컨테이너 */}
      <div
        className={`relative overflow-hidden transition-all duration-500 border-neutral-800 bg-black ${
          isMobileFrame
            ? "h-[844px] w-[390px] rounded-[55px] border-[12px] shadow-2xl shadow-black/80"
            : "h-full w-full rounded-none border-0"
        }`}
      >
        {/* iOS 상태바 영역 공간 */}
        <div className="absolute top-0 left-0 right-0 h-12 z-40 flex justify-between items-center px-7 text-xs font-semibold text-white pointer-events-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-5 h-2.5 border border-white rounded-sm p-[1px]">
              <div className="h-full w-full bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* 메인 홈 스크린 영역 */}
        <div className="h-full w-full pt-12 pb-6 px-4 flex flex-col justify-between">
          <div className="text-center mt-20 text-neutral-500">
            <p className="text-sm font-medium">Apple UI Animation Starter</p>
            <p className="text-xs opacity-60 mt-1">컴포넌트를 조립하여 사용하세요.</p>
          </div>
        </div>
      </div>
    </main>
  );
}