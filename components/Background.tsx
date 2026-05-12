'use client';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "15%", "-10%", "0%"], y: ["0%", "-15%", "10%", "0%"], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/30 blur-[100px] rounded-full mix-blend-screen"
      ></motion.div>
      <motion.div 
        animate={{ x: ["0%", "-15%", "10%", "0%"], y: ["0%", "15%", "-10%", "0%"], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/30 blur-[120px] rounded-full mix-blend-screen"
      ></motion.div>
    </div>
  );
}