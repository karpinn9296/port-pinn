'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="text-white min-h-screen font-sans selection:bg-white selection:text-black relative flex flex-col">

      {/* 3. 메인 콘텐츠 */}
      <main className="flex-1 flex items-center justify-center relative z-10 px-6 pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-20 shadow-2xl flex flex-col md:flex-row gap-16 md:gap-24"
        >
          {/* 좌측: 인사말 및 메인 연락처 */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Let's play!</h1>
            <p className="text-white/60 text-lg md:text-xl font-light mb-12 leading-relaxed">
              영상 편집, VRChat 및 시네머신 촬영 <br/>관련 프로젝트 제의는 언제나 <br/>환영입니다!
            </p>
            
            <div className="mt-auto">
              <p className="text-white/40 text-sm tracking-widest mb-2 font-medium">EMAIL</p>
              {/* ✨ 수정됨: mailto 주소를 실제 이메일과 일치시켰습니다. */}
              <a 
                href="mailto:prpinn9296@gmail.com" 
                className="inline-block text-2xl md:text-3xl font-light tracking-wide text-white hover:text-indigo-300 transition-colors border-b border-white/30 hover:border-indigo-300 pb-1"
              >
                prpinn9296@gmail.com
              </a>
            </div>
          </div>

          {/* 우측: 소셜 및 커뮤니티 링크 */}
          <div className="flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-24 gap-8">
            <div>
              <p className="text-white/40 text-sm tracking-widest mb-4 font-medium">SOCIAL & WORKS</p>
              <ul className="flex flex-col gap-4 text-xl font-light tracking-wider">
                <li>
                  {/* ✨ 디스코드 개인 계정은 다이렉트 링크가 없으므로 클릭 시 디스코드 웹으로 이동하게 해두었습니다. */}
                  <a 
                    href="https://discord.com/users/684637928617541664" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-[1px] bg-white/30 group-hover:bg-white group-hover:w-12 transition-all"></span>
                    Discord - karpinn_ine
                  </a>
                </li>
                <li>
                  {/* ✨ X(트위터) 실제 링크 연결 및 새 창 열기 적용 */}
                  <a 
                    href="https://x.com/karpinn_ine" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-[1px] bg-white/30 group-hover:bg-white group-hover:w-12 transition-all"></span>
                    X - @karpinn_ine
                  </a>
                </li>
                <li>
                  {/* ✨ X(트위터) 실제 링크 연결 및 새 창 열기 적용 */}
                  <a 
                    href="https://www.instagram.com/pinnn_editor/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-[1px] bg-white/30 group-hover:bg-white group-hover:w-12 transition-all"></span>
                    Instagram - @pinnn_editor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}