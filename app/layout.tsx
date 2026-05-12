import type { Metadata } from 'next';
import './globals.css';

// Client Components 분리한 것 불러오기
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import HiddenAdminTrigger from '@/components/HiddenAdminTrigger';

export const metadata: Metadata = {
  title: 'KARPINN | Visual Creator',
  description: 'Visual Creator & Director Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black relative overflow-x-hidden">
        
        {/* 1. 페이지를 이동해도 끊기지 않는 배경 오로라 */}
        <Background />
        
        {/* 2. 고정된 네비게이션 바 */}
        <Navbar />
        
        {/* 3. 우측 하단 숨겨진 관리자 접속 버튼 (이스터 에그) */}
        <HiddenAdminTrigger />

        {/* 4. 각 페이지별 내용 (메인, 촬영, 편집, 컨택트) */}
        <main className="relative z-10">
          {children}
        </main>
        
      </body>
    </html>
  );
} 