'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // 현재 경로에 따라 메뉴 하이라이트 가능

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-black/40 backdrop-blur-md border-b border-white/10">
      {/* 좌측 상단 로고 영역 */}
      <Link href="/" className="flex items-center gap-3 md:gap-4 group z-50">
  
        {/* 1. 로고 이미지 (PNG 업로드 방식) */}
        <div className="relative w-8 h-8 md:w-10 md:h-10 transition-opacity duration-300 group-hover:opacity-80">
          <Image 
            src="/images/logo_white.png"
            alt="KARPINN Logo"
            fill
            className="object-contain"
            priority /* 👈 로고는 사이트의 얼굴이므로 가장 먼저 로딩되도록 설정 */
          />
        </div>

        {/* 2. 브랜드 텍스트 */}
        <span className="text-xl md:text-2xl font-bold tracking-[0.3em] text-white group-hover:text-indigo-400 transition-colors duration-500 ease-out">
          KARPINN
        </span>
  
      </Link>
      <div className="flex gap-6 md:gap-10 text-sm md:text-base tracking-wider font-medium z-10">
        <Link href="/filming" className={`transition-colors ${pathname === '/filming' ? 'text-white' : 'text-white/60 hover:text-white'}`}>FILMING</Link>
        <Link href="/editing" className={`transition-colors ${pathname === '/editing' ? 'text-white' : 'text-white/60 hover:text-white'}`}>EDITING</Link>
        <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-white' : 'text-white/60 hover:text-white'}`}>CONTACT</Link>
      </div>
    </nav>
  );
}