import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FD] via-[#F8FAFC] to-[#DBEAFE] opacity-70"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#89CFF0] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#60A5FA] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <Sparkles className="w-12 h-12 text-[#2B6CB0] animate-bounce" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#89CFF0] bg-clip-text text-transparent">
          Dana
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-[#2B6CB0] mb-4">
          Developer exploring games, sound, and interaction!
        </p>
        <p className="text-lg md:text-xl text-[#1E293B] opacity-80 mb-8 max-w-2xl mx-auto">
          Based in Vancouver, currently moving from interactive pieces to game development.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-[#2B6CB0] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2563A8] transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
}
