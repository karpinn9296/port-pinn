'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HiddenAdminTrigger() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    isSeries: false,
    mediaType: 'youtube', // 👈 'youtube'로 영구 고정
    mediaUrl: '',
    thumbnail: '',
    description: '',
    actionLink: '',
    actionText: ''
  });

  const handleLogin = () => {
    if (password === 'pinnya92966') { 
      setIsAuthenticated(true);
      setShowPrompt(false);
      setPassword('');
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('업로드될 데이터:', formData);
    alert('콘솔창에 데이터가 출력되었습니다. (백엔드 연동 전)');
  };

  return (
    <>
      <div 
        className="fixed bottom-0 right-0 w-16 h-16 opacity-0 hover:cursor-crosshair z-[90]"
        onClick={() => setShowPrompt(true)}
      />

      <AnimatePresence>
        {showPrompt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="p-8 bg-zinc-900/80 rounded-2xl border border-white/20 text-center w-80 shadow-2xl">
              <h3 className="mb-6 font-bold text-xl tracking-widest text-white/80">ADMIN ACCESS</h3>
              <input 
                type="password" autoFocus placeholder="Enter Passcode"
                className="bg-black/50 border border-white/20 p-3 rounded-lg text-white mb-6 w-full text-center tracking-widest focus:outline-none focus:border-white/50"
                value={password} onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
              <div className="flex gap-3">
                <button onClick={() => setShowPrompt(false)} className="flex-1 bg-white/10 hover:bg-white/20 p-3 rounded-lg text-white/70">Cancel</button>
                <button onClick={handleLogin} className="flex-1 bg-white text-black font-bold p-3 rounded-lg">Enter</button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isAuthenticated && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-zinc-950 z-[100] p-6 md:p-10 overflow-auto"
          >
            <div className="max-w-4xl mx-auto pt-10">
              <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight mb-2">New Portfolio</h2>
                  <p className="text-white/50">현재 유튜브(YouTube) 영상 링크 업로드만 지원합니다.</p>
                </div>
                <button onClick={() => setIsAuthenticated(false)} className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium">
                  Close & Logout
                </button>
              </div>
              
              <form onSubmit={handleUpload} className="space-y-8 pb-24">
                
                {/* 1. 기본 정보 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Title (제목)</label>
                    <input type="text" required className="w-full bg-black/50 border border-white/20 p-3 rounded-lg focus:border-indigo-500 outline-none" 
                      value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Category (카테고리/역할)</label>
                    <input type="text" required className="w-full bg-black/50 border border-white/20 p-3 rounded-lg focus:border-indigo-500 outline-none" 
                      value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
                  </div>
                </div>

                {/* 2. 미디어 타입 (유튜브 고정) 및 시리즈 여부 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-xl border border-white/5">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Media Type</label>
                    <div className="w-full bg-indigo-900/20 border border-indigo-500/30 p-3 rounded-lg text-indigo-300 font-medium tracking-wider flex items-center justify-center">
                      🎥 YouTube Embed Mode
                    </div>
                  </div>
                  <div className="flex items-center mt-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 accent-indigo-500" 
                        checked={formData.isSeries} onChange={e => setFormData({...formData, isSeries: e.target.checked})} />
                      <span className="font-medium text-white/80">정기 시리즈물인가요? (시리즈 뱃지 표시)</span>
                    </label>
                  </div>
                </div>

                {/* 3. 유튜브 URL & 썸네일 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">YouTube Embed URL (유튜브 퍼가기 주소)</label>
                    <input type="text" required placeholder="예: https://www.youtube.com/embed/Hy5QRFqHHaI" 
                      className="w-full bg-black/50 border border-white/20 p-3 rounded-lg focus:border-indigo-500 outline-none" 
                      value={formData.mediaUrl} onChange={e => setFormData({...formData, mediaUrl: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Thumbnail URL (썸네일 이미지 주소)</label>
                    <input type="text" placeholder="예: https://img.youtube.com/vi/Hy5QRFqHHaI/maxresdefault.jpg" 
                      className="w-full bg-black/50 border border-white/20 p-3 rounded-lg focus:border-indigo-500 outline-none" 
                      value={formData.thumbnail} onChange={e => setFormData({...formData, thumbnail: e.target.value})} />
                  </div>
                </div>

                {/* 4. 설명글 */}
                <div>
                  <label className="block text-sm text-white/50 mb-2">Description (작품 설명)</label>
                  <textarea required rows={5} className="w-full bg-black/50 border border-white/20 p-3 rounded-lg focus:border-indigo-500 outline-none resize-none" 
                    value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
                </div>

                {/* 5. 외부 링크 버튼 설정 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-xl border border-white/5">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Action Link (이동할 재생목록/채널 주소)</label>
                    <input type="text" placeholder="옵션 (예: 풀버전 재생목록 주소)" 
                      className="w-full bg-black/50 border border-white/20 p-3 rounded-lg focus:border-indigo-500 outline-none" 
                      value={formData.actionLink} onChange={e => setFormData({...formData, actionLink: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Action Text (버튼에 적힐 글귀)</label>
                    <input type="text" placeholder="옵션 (예: 전체 영상 보러가기)" 
                      className="w-full bg-black/50 border border-white/20 p-3 rounded-lg focus:border-indigo-500 outline-none" 
                      value={formData.actionText} onChange={e => setFormData({...formData, actionText: e.target.value})} />
                  </div>
                </div>

                {/* 제출 버튼 */}
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-bold text-lg py-4 rounded-xl mt-4 shadow-lg shadow-indigo-500/30">
                  Upload YouTube Portfolio
                </button>
              </form>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}