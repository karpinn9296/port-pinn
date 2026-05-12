'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioDemo() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    /* 최상위 div의 bg-black을 제거하여 layout.tsx의 배경이 보이게 합니다 */
    <div className="min-h-screen font-sans selection:bg-white selection:text-black relative">
      
      {/* 1. Hero Section (인트로) */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10 overflow-hidden">
        
        {/* 영상 영역 (z-index를 가장 낮게 배치) */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: isVideoEnded ? 0 : 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 -z-30"
        >
          <video 
            autoPlay 
            muted 
            playsInline
            onEnded={() => setIsVideoEnded(true)}
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* 영상 오버레이 (영상이 끝난 후에는 투명도를 조절해 오로라가 더 잘 보이게 함) */}
        <motion.div 
          animate={{ opacity: isVideoEnded ? 0.6 : 1 }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none -z-20"
        ></motion.div>
        
        {/* 타이틀 텍스트 */}
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black z-10 tracking-tight text-white mb-6 text-center break-keep drop-shadow-2xl"
        >
          세상의 모든 아름다운 별들을 위해
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-lg md:text-xl z-10 text-white/80 font-light tracking-widest text-center drop-shadow-lg"
        >
          For all of the beautiful stars in the world
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 z-10 text-xs md:text-sm tracking-widest text-white/50"
        >
          SCROLL DOWN ↓
        </motion.div>
      </section>

      {/* 2. About Me Section (배경을 투명하게 설정) */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-20 py-24 relative z-10 bg-transparent">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }} 
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full rounded-3xl border border-white/10 shadow-2xl shadow-indigo-500/10 relative overflow-hidden group bg-white/5"
          >
            <img 
              src="https://i.ibb.co/HpDnPKFt/20260511ka1.png" 
              alt="KARPINN Profile" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }} 
            transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white text-shadow">
              경계를 허무는 <br /> 
              <span className="text-white relative inline-block mt-2">
                비주얼 디렉터
                <span className="absolute bottom-1 left-0 w-full h-1 bg-white/40 rounded-full"></span>
              </span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
              쇼츠 중심의 영상 편집부터 VRC, 시네머신을 활용한 카메라 워킹까지. <br />
              작업을 맡겨주시는 모든 아름다운 별의 든든한 서포터 카핀입니다
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Premiere Pro', 'Unity Cinemachine', 'PrismStudio (VRC)'].map((skill) => (
                <span key={skill} className="px-4 py-2 border border-white/20 rounded-full text-sm text-white bg-white/5 backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Portfolio Selection Section */}
      <section className="h-screen w-full flex flex-col relative z-10 bg-transparent">
        
        {/* Filming 영역 */}
        <div className="flex-1 w-full relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-250px" }} 
            transition={{ duration: 1.5, ease: "easeOut" }} 
            className="absolute inset-0 w-full h-full group"
          >
            <Link href="/filming" className="block w-full h-full">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-indigo-900/30 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-white/5 group-hover:scale-105 group-hover:bg-indigo-900/40 transition-all duration-1000 ease-out"></div>
                
                {/* 📌 [추가됨] 우측 빈 공간에 아바타 이미지 배치 */}
                <img 
                  src="/images/avatar-filming.png" 
                  alt="Avatar Filming" 
                  className="absolute bottom-0 right-12 md:right-24 h-[85%] w-auto object-contain z-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 pointer-events-none"
                />

                {/* 좌측 텍스트 영역 */}
                <div className="absolute bottom-12 left-12 md:left-24 z-20">
                  <p className="text-white/70 font-semibold tracking-widest mb-2 text-sm md:text-base">01. WORK</p>
                  {/* 📌 [수정됨] relative inline-block 적용 및 밑줄(h-1) 추가 */}
                  <h3 className="text-6xl md:text-8xl font-black tracking-widest text-white drop-shadow-xl relative inline-block pb-2">
                    FILMING
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Editing 영역 */}
        <div className="flex-1 w-full relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-250px" }} 
            transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full group"
          >
            <Link href="/editing" className="block w-full h-full">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center border-t border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/30 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-white/5 group-hover:scale-105 group-hover:bg-purple-900/40 transition-all duration-1000 ease-out"></div>

                {/* 📌 [추가됨] 좌측 빈 공간에 아바타 이미지 배치 */}
                <img 
                  src="/images/avatar-editing.png" 
                  alt="Avatar Editing" 
                  className="absolute bottom-0 left-12 md:left-24 h-[85%] w-auto object-contain z-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 pointer-events-none"
                />

                {/* 우측 텍스트 영역 */}
                <div className="absolute bottom-12 right-12 md:right-24 z-20 text-right">
                  <p className="text-white/70 font-semibold tracking-widest mb-2 text-sm md:text-base">02. WORK</p>
                  {/* 📌 [수정됨] relative inline-block 적용 및 밑줄(h-1, right-0) 추가 */}
                  <h3 className="text-6xl md:text-8xl font-black tracking-widest text-white drop-shadow-xl relative inline-block pb-2">
                    EDITING
                    <span className="absolute right-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

      </section>

      {/* 4. Contact Teaser Section (배경 투명화) */}
      <section className="min-h-[40vh] flex flex-col items-center justify-center py-24 relative z-10 bg-transparent border-t border-white/10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to collaborate?</h2>
          <p className="text-white/60 mb-10 text-lg font-light">새로운 프로젝트나 협업 문의는 언제든 환영합니다.</p>
          <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            Contact Me →
          </Link>
        </motion.div>
      </section>

    </div>
  );
}