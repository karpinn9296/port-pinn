'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';


const works = [
  { 
    id: 1, 
    title: '주간왁물원 인터뷰', 
    category: 'PrismStudio(VRC)', 
    isSeries: true,
    thumbnail: 'https://img.youtube.com/vi/Hy5QRFqHHaI/maxresdefault.jpg', // 👈 유튜브 썸네일 자동 불러오기 링크
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/Hy5QRFqHHaI', // ?si= 부분은 지워도 무방합니다
    description: "주간왁물원 인터뷰영상, 기습공격인터뷰 등에서 VRC촬영 및 팀 내 촬영팀장으로서 활동했습니다.",
    actionLink: 'https://www.youtube.com/playlist?list=PLEQaibBnRrvviAPDLpt4QQ2T9f_xRarsH', 
    actionText: '주간왁물원 인터뷰 보러가기'
  },
  { 
    id: 2, 
    title: '주간라디오', 
    category: 'PrismStudio(VRC)', 
    isSeries: true,
    thumbnail: 'https://img.youtube.com/vi/NrJuQ6puk2g/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/NrJuQ6puk2g', 
    description: "매주 왁타버스의 소식을 전하는 주간라디오에서 영상팀장으로서 촬영 전반의 과정을 감독하고 있습니다.",
    actionLink: 'https://www.youtube.com/playlist?list=PLEQaibBnRrvvkRyLw3zu8iahPW8i-AEyt', 
    actionText: '주간라디오 보러가기'
  },
  { 
    id: 3, 
    title: '릴니티 옷장털이', 
    category: 'Unity', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/nvigJ1WZbJE/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/nvigJ1WZbJE', 
    description: "릴니티 팀의 자체제작 프로그램을 이용해 옷장털이 콘텐츠의 실시간 카메라를 담당했습니다",
    actionLink: 'https://www.youtube.com/embed/nvigJ1WZbJE', 
    actionText: '영상 보러가기'
  },
  { 
    id: 4, 
    title: '문모모 미니콘서트', 
    category: 'Unity Cinemachine', 
    isSeries: false,
    mediaType: 'image',
    mediaUrl: '/images/momo.png', 
    description: "고세구님의 방송 3주년을 기념해 제작한 콘텐츠에서 촬영으로 참여했습니다",
    actionLink: 'https://vod.sooplive.co.kr/player/142429207', 
    actionText: '콘서트 영상 보러가기'
  },
  { 
    id: 5, 
    title: 'VLYZ 콘서트 PANDORA - 콘서트 관람 에티켓', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/rCvDMVun5rI/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/rCvDMVun5rI', 
    description: "VLYZ의 오프라인 콘서트 'PANDORA'의 인터미션 영상 중 안전수칙 영상 촬영에 참여했습니다",
    actionLink: 'https://www.youtube.com/embed/rCvDMVun5rI', 
    actionText: '영상 보러가기'
  },
  { 
    id: 6, 
    title: 'VLYZ 콘서트 PANDORA - 춤 연습 브이로그', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/gQCql85OE3M/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/gQCql85OE3M', 
    description: "VLYZ의 오프라인 콘서트 'PANDORA'의 인터미션 영상 중 춤 연습 브이로그 촬영에 참여하며, 핸드헬드 카메라를 주로 사용했습니다.",
    actionLink: 'https://www.youtube.com/embed/gQCql85OE3M', 
    actionText: '영상 보러가기'
  },
  { 
    id: 7, 
    title: 'VLYZ 콘서트 PANDORA - 블리위키', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/mzC3Ssfd2bc/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/mzC3Ssfd2bc', 
    description: "VLYZ의 오프라인 콘서트 'PANDORA'의 인터미션 영상 중 블리위키 영상에 참여했으며, 멀티캠 촬영을 적극 이용해 다양한 구도를 동시에 촬영했습니다.",
    actionLink: 'https://www.youtube.com/embed/mzC3Ssfd2bc', 
    actionText: '영상 보러가기'
  },
  { 
    id: 8, 
    title: '블루롤 : 언더독', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/I0Hm8VsDQKM/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/I0Hm8VsDQKM', 
    description: "릴파님의 블루롤:언더독 컨텐츠에서 인터뷰, 벤픽, 경기장 인서트 및 선수 프로필사진 촬영 등 전반적인 촬영 작업을 참여했습니다.",
    actionLink: 'https://www.youtube.com/embed/I0Hm8VsDQKM', 
    actionText: '반응 영상 보러가기'
  },
  { 
    id: 9, 
    title: '뮤지컬 올 나잇 : 레티아 - 나는 나를 말하는 사람', 
    category: 'Unity Cinemachine', 
    isSeries: false,
    mediaType: 'image',
    mediaUrl: '/images/LTA.png', 
    description: "뮤지컬 올 나잇에서 시네머신 작업으로 참여하여, 시네머신 작업 및 전체적인 구도를 구상했습니다.",
    actionLink: 'https://vod.sooplive.com/player/186185005', 
    actionText: '공연 보러가기'
  },
  { 
    id: 10, 
    title: '뮤지컬 올 나잇 : 송소미 - Mama Who Bore Me', 
    category: 'Unity Cinemachine', 
    isSeries: false, 
    mediaType: 'image',
    mediaUrl: '/images/SSM.png', 
    description: "뮤지컬 올 나잇에서 시네머신 작업으로 참여하여, 시네머신 작업 및 전체적인 구도를 구상했습니다.",
    actionLink: 'https://vod.sooplive.com/player/186184457', 
    actionText: '공연 보러가기'
  },
  { 
    id: 11, 
    title: '뮤지컬 올 나잇 : 이류호X레티아 - In his eyes', 
    category: 'Unity Cinemachine', 
    isSeries: false,
    mediaType: 'image',
    mediaUrl: '/images/LRHLTA.png', 
    description: "뮤지컬 올 나잇에서 시네머신 작업으로 참여하여, 시네머신 작업 및 전체적인 구도를 구상했습니다.",
    actionLink: 'https://vod.sooplive.com/player/186185341', 
    actionText: '공연 보러가기'
  },
  { 
    id: 12, 
    title: '24년도 릴파님 생일 축하 영상', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/byt2EBi970Y/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/byt2EBi970Y?si=leefn4WVlLfT-tXp&amp;start=6963', 
    description: "24년도 릴파님 생일 기념 팬 영상에서 촬영인력으로 활동하며 다양한 구도를 시도해 보았습니다.",
    actionLink: 'https://www.youtube.com/embed/byt2EBi970Y?si=leefn4WVlLfT-tXp&amp;start=6963', 
    actionText: '영상 보러가기'
  },
  { 
    id: 13, 
    title: '박취 더 락 오리지널 <깨지 않는 꿈>', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    mediaType: 'image',
    mediaUrl: '/images/btr.png', 
    description: "박취 더 락의 오리지널송 '꺠지 않는 꿈'의 뮤비 촬영을 맡아, 본격적인 카메라 워킹을 사용한 작품입니다.",
    actionLink: 'https://cafe.naver.com/steamindiegame/18572534', 
    actionText: '반응 영상 보러가기'
  },
  { 
    id: 14, 
    title: '버축대2 까만양념 블랙맘바 MV-Kick Off', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: '/images/kick.png', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/yaESe0TkXRY?si=QQyfSXABzYlzTLps&amp;start=294', 
    description: "버츅대2의 까만양념 블랙맘바 팀의 Kick off MV를 담당하였습니다(영상은 부득이 반응 영상으로 링크 걸어뒀습니다)",
    actionLink: 'https://www.youtube.com/embed/yaESe0TkXRY?si=QQyfSXABzYlzTLps&amp;start=294', 
    actionText: '반응 영상 보러가기'
  },
  { 
    id: 15, 
    title: '락다운 1000만 기념 축하 영상 (왁타버스 뮤직)', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/PSHCaDGyqPY/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/PSHCaDGyqPY?si=WjEhXjbwwPhduAVn&amp;start=328', 
    description: "왁타버스 뮤직과 협업하여 락다운 1000만 기념 축하 영상 제작에 참여하였습니다",
    actionLink: 'https://www.youtube.com/embed/PSHCaDGyqPY?si=WjEhXjbwwPhduAVn&amp;start=328', 
    actionText: '영상 보러가기'
  },
  { 
    id: 16, 
    title: '고세구 방송 3주년 기념 영상', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/nSrzBDQeMBA/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/nSrzBDQeMBA', 
    description: "고세구님의 방송 3주년을 기념해 제작한 콘텐츠에서 촬영으로 참여했습니다",
    actionLink: 'https://www.youtube.com/embed/nSrzBDQeMBA', 
    actionText: '반응 영상 보러가기'
  },
  { 
    id: 17, 
    title: '왁물원 추석 앙케이트 - 왁심만만', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    mediaType: 'image',
    mediaUrl: '/images/waksim.png', 
    description: "추석 연휴 특집으로 업로드 된 왁심만만 콘텐츠 촬영을 맡았습니다",
    actionLink: 'https://cafe.naver.com/steamindiegame/17948489', 
    actionText: '영상 보러가기'
  },
  { 
    id: 18, 
    title: '마다옴 & 봄세이 배그대회 영상', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    thumbnail: 'https://img.youtube.com/vi/MwnRLWibE4Y/hqdefault.jpg', 
    mediaType: 'youtube',
    mediaUrl: 'https://www.youtube.com/embed/MwnRLWibE4Y', 
    description: "고세구님의 방송 3주년을 기념해 제작한 콘텐츠에서 촬영으로 참여했습니다",
    actionLink: 'https://www.youtube.com/embed/MwnRLWibE4Y', 
    actionText: '반응 영상 보러가기'
  },
  { 
    id: 19, 
    title: '봄세이 배그대회 봄:실험실 규칙 영상', 
    category: 'PrismStudio(VRC)', 
    isSeries: false,
    mediaType: 'image',
    mediaUrl: '/images/sei.png', 
    description: "고세구님의 방송 3주년을 기념해 제작한 콘텐츠에서 촬영으로 참여했습니다",
    actionLink: 'https://vod.sooplive.co.kr/player/157413157', 
    actionText: '영상 보러가기'
  },
  
  
];

export default function FilmingPage() {
  // 보기 모드 상태 관리 ('card' 또는 'list')
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  // 팝업(모달) 상태 관리
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
            FILMING<span className="text-white/30 font-light"> WORKS</span>
          </motion.h1>

          {/* 뷰 모드 토글 버튼 */}
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

        {/* 조건부 렌더링: 뷰 모드에 따라 레이아웃 변경 */}
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
                      정기작업
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
        {/* 📌 여기까지! */}
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