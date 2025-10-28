'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certifications = [
    { 
      name: 'Unity Essentials Pathway', 
      url: 'https://www.credly.com/badges/8523f1b3-ae8c-43bb-95fd-8c57be0ca8b2/linked_in_profile' // Replace with your actual URL
    },
    { 
      name: 'Unity Junior Programmer', 
      url: 'https://www.credly.com/badges/e8071fb9-38a8-46a8-9116-556aa28f8263/linked_in_profile' // Replace with your actual URL
    }
  ];

  const musicProjects = [
    {
      description: 'I See Fire - Ed Sheeran',
      mediaType: 'video',
      mediaUrl: '/iseefire.mp4',
    },
    {
      description: 'Talking to the Moon - Bruno Mars',
      mediaType: 'video',
      mediaUrl: '/talkingtothemoon.mp4',
    },
    {
      description: 'True Colors - Cyndi Lauper',
      mediaType: 'video',
      mediaUrl: '/truecolors.mp4',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % musicProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + musicProjects.length) % musicProjects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-[#F8FAFC] to-[#DBEAFE] py-16 px-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 text-[#2B6CB0] hover:text-[#89CFF0] transition-colors font-semibold"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#89CFF0] bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-6">
          <p className="text-lg text-[#1E293B] leading-relaxed">
            Hi! I’m Dana, I’m a University of British Columbia student majoring in Cognitive Systems and minoring in Applied Music Technology. 
            I enjoy combining technology, music, and gaming! I create interactive sound experiences through coding and design, and I’m currently expanding my skills toward game development. 
            I aim to bring creative systems to life in immersive, playable worlds.</p>
        
          <h2 className="text-2xl font-semibold text-[#2B6CB0] mt-8 mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Unity', 'C#', 'Java', 'JavaScript', 'React', 'Game Design', 'Sound Design', 'UI/UX', 'Max'].map((skill) => (
              <div key={skill} className="bg-[#E3F2FD] px-4 py-2 rounded-lg text-center text-[#2B6CB0] font-medium">
                {skill}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-[#2B6CB0] mt-8 mb-4">Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <a 
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2B6CB0] text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-[#1E5A8E] hover:scale-105 transition-all duration-300 cursor-pointer underline decoration-white/50 hover:decoration-white"
              >
                {cert.name} →
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-[#2B6CB0] mt-8 mb-4">Music</h2>
          <p className="text-[#1E293B] mb-6 opacity-90">
            Music is a big part of my life as I have been singing since I was little and playing guitar since I was 14.
          </p>
          
          {/* Slideshow */}
          <div className="relative bg-gradient-to-br from-white to-[#F8FAFC] rounded-xl p-4 shadow-sm">
            {musicProjects[currentSlide].mediaType === 'video' ? (
              <div className="aspect-video w-full mb-3">
                <video
                  key={currentSlide}
                  width="100%"
                  height="100%"
                  controls
                  className="rounded-lg"
                >
                  <source src={musicProjects[currentSlide].mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img 
                src={musicProjects[currentSlide].mediaUrl} 
                alt={`Music memory ${currentSlide + 1}`}
                className="w-full rounded-lg shadow-sm mb-3"
              />
            )}
            <p className="text-[#1E293B] text-sm italic opacity-75 mb-4">{musicProjects[currentSlide].description}</p>
            
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="bg-[#2B6CB0] text-white p-2 rounded-full hover:bg-[#1E5A8E] transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {musicProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-[#2B6CB0] w-6' : 'bg-[#2B6CB0]/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-[#2B6CB0] text-white p-2 rounded-full hover:bg-[#1E5A8E] transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
