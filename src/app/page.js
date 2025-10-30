'use client';

import Link from 'next/link';
import { Sparkles, Code, Music, Gamepad2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Gradient Background */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-animate {
          background: linear-gradient(270deg, #E3F2FD, #DBEAFE, #F0F9FF, #E0E7FF);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>
      
      <div className="absolute inset-0 gradient-animate"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        {/* Profile section */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#2B6CB0] to-[#89CFF0] p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src="/me2.jpg" 
                  alt="Dana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#89CFF0] bg-clip-text text-transparent">
          Dana Neria
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-[#2B6CB0] mb-4">
          Developer • Creator
        </p>
        <p className="text-lg md:text-xl text-[#1E293B] opacity-80 mb-12 max-w-2xl mx-auto">
          Budding game developer with a passion for music and web technologies.
        </p>

        {/* Skills icons */}
        <div className="flex justify-center gap-6 mb-12">
          <Link href="/projects?category=Game" className="group">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Gamepad2 className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="mt-2 text-sm font-medium text-[#2B6CB0]">Game Dev</p>
          </Link>
          <Link href="/projects?category=Web" className="group">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Code className="w-8 h-8 text-orange-500" />
            </div>
            <p className="mt-2 text-sm font-medium text-[#2B6CB0]">Web Dev</p>
          </Link>
          <Link href="/projects?category=Music" className="group">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Music className="w-8 h-8 text-purple-500" />
            </div>
            <p className="mt-2 text-sm font-medium text-[#2B6CB0]">Music Tech</p>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-block bg-[#2B6CB0] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2563A8] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View My Projects
          </Link>
          <Link
            href="/about"
            className="inline-block bg-white text-[#2B6CB0] border-2 border-[#2B6CB0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#E3F2FD] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            About Me
          </Link>
        </div>

        {/* Location tag */}
        <p className="mt-12 text-sm text-[#64748B]">
          📍 Based in Vancouver, BC
        </p>
      </div>
    </div>
  );
}
