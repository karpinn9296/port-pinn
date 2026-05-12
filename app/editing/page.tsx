'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// 편집 작업물 예시 데이터 (역할/기여도 명시)
const works = [
  { 
    id: 1, 
    title: '릴파 쇼츠 편집', 
    category: 'Premier Pro', 
    isSeries: true,
    thumbnail: 'https://img.youtube.com/vi/GwffcVEw1b0/hqdefault.jpg', // 👈 유튜브 썸네일 자동 불러오기 링크
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/GwffcVEw1b0', // ?si= 부분은 지워도 무방합니다
    description: "릴파님의 쇼츠 편집 일부를 담당하고 있으며, 일반 예능편집 외에도 챌린지 등의 영상을 동시에 시도해보고 있습니다.",
    actionLink: 'https://www.youtube.com/@lilpa/shorts', 
    actionText: '릴파 쇼츠 보러가기'
  },
  { 
    id: 2, 
    title: '여우연 쇼츠 편집', 
    category: 'Premier Pro', 
    isSeries: true,
    thumbnail: 'https://img.youtube.com/vi/n3qS2rZP0EU/hqdefault.jpg', // 👈 유튜브 썸네일 자동 불러오기 링크
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/n3qS2rZP0EU', // ?si= 부분은 지워도 무방합니다
    description: "여우연님의 쇼츠 편집을 맡아 영상을 업로드하고 있습니다.",
    actionLink: 'https://www.youtube.com/@fox_yeon/shorts', 
    actionText: '여우연 쇼츠 보러가기'
  },
  { 
    id: 3, 
    title: '힌콕 쇼츠 편집', 
    category: 'Premier Pro', 
    isSeries: true,
    thumbnail: 'https://img.youtube.com/vi/Xp5OjhiXlPg/hqdefault.jpg', // 👈 유튜브 썸네일 자동 불러오기 링크
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/Xp5OjhiXlPg', // ?si= 부분은 지워도 무방합니다
    description: "힌콕님의 쇼츠 편집자로 활동하며 영상을 납품했습니다.",
    actionLink: 'https://www.youtube.com/@힌콕/shorts', 
    actionText: '여우연 쇼츠 보러가기'
  },
  { 
    id: 4, 
    title: '펠리컨적 사고', 
    category: 'Premier Pro', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/0ccL1Aev0_k/hqdefault.jpg', // 👈 유튜브 썸네일 자동 불러오기 링크
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/0ccL1Aev0_k', // ?si= 부분은 지워도 무방합니다
    description: "비챤님의 '펠리컨적 사고'쇼츠 제작을 맡았습니다.",
    actionLink: 'https://www.youtube.com/embed/0ccL1Aev0_k', 
    actionText: '쇼츠 보러가기'
  },
  { 
    id: 5, 
    title: '대환장 이세돌 피코파크ㅋㅋㅋ', 
    category: 'Premier Pro', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/S08NPlqzOVE/hqdefault.jpg', // 👈 유튜브 썸네일 자동 불러오기 링크
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/S08NPlqzOVE', // ?si= 부분은 지워도 무방합니다
    description: "피코파크 합방 소스를 이용해 쇼츠 영상을 편집했습니다.",
    actionLink: 'https://www.youtube.com/embed/S08NPlqzOVE', 
    actionText: '쇼츠 보러가기'
  },
  { 
    id: 6, 
    title: '그 시절 지식인 답장', 
    category: 'Premier Pro', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/q8uYXwEvIEY/hqdefault.jpg', // 👈 유튜브 썸네일 자동 불러오기 링크
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/q8uYXwEvIEY', // ?si= 부분은 지워도 무방합니다
    description: "징버거님의 쇼츠 '그 시절 지식인 답장'을 편집했습니다. 패턴형 배경을 추가해 쇼츠에 적용하는 시도를 한 작업입니다.",
    actionLink: 'https://www.youtube.com/embed/q8uYXwEvIEY', 
    actionText: '쇼츠 보러가기'
  },
  { 
    id: 7, 
    title: '기프트리 릴파 생일광고', 
    category: 'Premier Pro', 
    isSeries: false,
    mediaType: 'image',
    mediaUrl: '/images/lilad.jpg', // ?si= 부분은 지워도 무방합니다
    description: "징버거님의 쇼츠 '그 시절 지식인 답장'을 편집했습니다. 패턴형 배경을 추가해 쇼츠에 적용하는 시도를 한 작업입니다.",
    actionLink: 'https://x.com/giftreeofficial/status/2029010532616028170?s=20', 
    actionText: '홍대입구로 광고 보러가기'
  },
];

export default function EditingPage() {
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  return (
    <div className="text-white min-h-screen font-sans selection:bg-white selection:text-black relative overflow-x-hidden">

      <main className="pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* 타이틀 및 뷰 모드 컨트롤러 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            <span className="text-white/30 font-light">EDITING </span>WORKS
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 border border-white/20 rounded-full p-1 backdrop-blur-md bg-white/5"
          >
            <button 
              onClick={() => setViewMode('card')}
              className={`px-6 py-2 rounded-full text-sm tracking-wider transition-colors ${viewMode === 'card' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'}`}
            >
              CARD
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-6 py-2 rounded-full text-sm tracking-wider transition-colors ${viewMode === 'list' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'}`}
            >
              LIST
            </button>
          </motion.div>
        </div>

        {/* 📌 이 부분을 찾아서 아래 코드로 교체하세요 (썸네일 이미지 렌더링) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={viewMode} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={viewMode === 'card' ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'flex flex-col gap-4'}
          >
            {works.map((work) => (
              <div
                key={work.id}
                onClick={() => setSelectedWork(work.id)}
                className={`group cursor-pointer bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-3xl overflow-hidden ${viewMode === 'list' ? 'flex flex-row items-center p-4 gap-6' : 'p-0'}`}
              >
                <div className={`${viewMode === 'list' ? 'w-48 h-28 rounded-xl' : 'w-full aspect-video'} bg-black/50 relative overflow-hidden flex-shrink-0`}>
                  
                  {/* ✨ 추가된 썸네일 이미지 태그 ✨ */}
                  <img 
                    src={work.thumbnail || work.mediaUrl} 
                    alt={work.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" 
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
                  {work.isSeries && (
                    <span className="absolute top-4 right-4 z-20 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      SERIES
                    </span>
                  )}
                </div>
                
                <div className={`${viewMode === 'list' ? 'flex-1 flex justify-between items-center pr-4' : 'p-6 md:p-8'}`}>
                  <div>
                    <h3 className={`font-bold text-white group-hover:text-indigo-300 transition-colors ${viewMode === 'list' ? 'text-2xl mb-1' : 'text-3xl mb-3'}`}>
                      {work.title}
                    </h3>
                    <p className="text-white/50 font-light tracking-wide text-sm">{work.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. 팝업(Modal) 구현 */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} 
              className="w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* ✨ 상단: 유튜브, 비디오, 이미지 렌더링 ✨ */}
              <div className="w-full aspect-video bg-black relative flex-shrink-0">
                <button 
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 backdrop-blur-md border border-white/20"
                >
                  ✕
                </button>

                {(() => {
                  const work = works.find(w => w.id === selectedWork);
                  if (!work) return null;

                  if (work.mediaType === 'youtube') {
                    return (
                      <iframe 
                        className="w-full h-full" 
                        src={work.mediaUrl} 
                        title={work.title} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    );
                  } else if (work.mediaType === 'video') {
                    return <video className="w-full h-full object-contain" src={work.mediaUrl} controls autoPlay muted loop></video>;
                  } else if (work.mediaType === 'image') {
                    return <img className="w-full h-full object-contain" src={work.mediaUrl} alt={work.title} />;
                  }
                })()}
              </div>

              {/* ✨ 하단: 텍스트 및 액션 버튼 렌더링 ✨ */}
              <div className="p-8 md:p-12 overflow-y-auto">
                {(() => {
                  const work = works.find(w => w.id === selectedWork);
                  if (!work) return null;

                  return (
                    <>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{work.title}</h2>
                      <p className="text-white/70 leading-relaxed font-light mb-8 whitespace-pre-wrap">
                        {work.description}
                      </p>
                      
                      {/* actionLink가 있으면 버튼 렌더링 */}
                      {work.actionLink && (
                        <a 
                          href={work.actionLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-indigo-500/30"
                        >
                          {work.actionText} →
                        </a>
                      )}
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}