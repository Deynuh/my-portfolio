'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVolleyballSlide, setCurrentVolleyballSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoRef = useRef(null);

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
    },{
      description: 'No Time to Die - Billie Eilish',
      mediaType: 'video',
      mediaUrl: '/notimetodie.mp4',
    },{
      description: 'Vampire - Olivia Rodrigo',
      mediaType: 'video',
      mediaUrl: '/vampire.mp4',
    },
  ];

  const volleyballPics = [
    {
      description: 'UBC Intramurals Volleyball Team 2025',
      mediaType: 'image',
      mediaUrl: '/vball1.jpg',
    },
    {
      description: 'UBC Intramurals Volleyball Team 2025',
      mediaType: 'image',
      mediaUrl: '/vball2.jpg',
    },{
      description: 'LSCA Volleyball Team 2011',
      mediaType: 'image',
      mediaUrl: '/vball3.jpg',
    },{
      description: 'LSCA Volleyball Team 2011',
      mediaType: 'image',
      mediaUrl: '/vball4.jpg',
    },
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % musicProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + musicProjects.length) % musicProjects.length);
  };

  const nextVolleyballSlide = () => {
    setCurrentVolleyballSlide((prev) => (prev + 1) % volleyballPics.length);
  };

  const prevVolleyballSlide = () => {
    setCurrentVolleyballSlide((prev) => (prev - 1 + volleyballPics.length) % volleyballPics.length);
  };

  const openModal = (content) => {
    // Pause the video in the slideshow before opening modal
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-[#F8FAFC] to-[#DBEAFE] py-16 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
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
          {/* Profile Image with Peony Flower */}
          <div className="relative flex justify-center mb-5 py-1">
            {/* Peony flower shape background */}
            <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative w-[500px] h-[500px] scale-75 sm:scale-90 md:scale-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  
                  {/* Outer layer petals - using ellipses for more realistic petal shapes */}
                  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-44 h-56 bg-[#89CFF0]/70 rounded-[50%] rotate-0 animate-pulse" style={{animationDuration: '3s'}}></div>
                  <div className="absolute -top-32 -right-32 w-44 h-56 bg-[#60A5FA]/70 rounded-[50%] rotate-45 animate-pulse" style={{animationDuration: '3s', animationDelay: '0.375s'}}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-44 h-56 bg-[#89CFF0]/70 rounded-[50%] rotate-90 animate-pulse" style={{animationDuration: '3s', animationDelay: '0.75s'}}></div>
                  <div className="absolute -bottom-32 -right-32 w-44 h-56 bg-[#60A5FA]/70 rounded-[50%] rotate-[135deg] animate-pulse" style={{animationDuration: '3s', animationDelay: '1.125s'}}></div>
                  <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-44 h-56 bg-[#89CFF0]/70 rounded-[50%] rotate-180 animate-pulse" style={{animationDuration: '3s', animationDelay: '1.5s'}}></div>
                  <div className="absolute -bottom-32 -left-32 w-44 h-56 bg-[#60A5FA]/70 rounded-[50%] rotate-[225deg] animate-pulse" style={{animationDuration: '3s', animationDelay: '1.875s'}}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-44 h-56 bg-[#89CFF0]/70 rounded-[50%] rotate-[270deg] animate-pulse" style={{animationDuration: '3s', animationDelay: '2.25s'}}></div>
                  <div className="absolute -top-32 -left-32 w-44 h-56 bg-[#60A5FA]/70 rounded-[50%] rotate-[315deg] animate-pulse" style={{animationDuration: '3s', animationDelay: '2.625s'}}></div>
                  
                  {/* Middle layer petals - slightly smaller and rotated */}
                  <div className="absolute -top-28 left-1/3 w-36 h-44 bg-[#60A5FA]/85 rounded-[50%] rotate-[22deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '0.2s'}}></div>
                  <div className="absolute -top-20 -right-20 w-36 h-44 bg-[#89CFF0]/85 rounded-[50%] rotate-[67deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '0.6s'}}></div>
                  <div className="absolute top-1/3 -right-28 w-36 h-44 bg-[#60A5FA]/85 rounded-[50%] rotate-[112deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/3 -right-20 w-36 h-44 bg-[#89CFF0]/85 rounded-[50%] rotate-[157deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '1.4s'}}></div>
                  <div className="absolute -bottom-28 left-1/3 w-36 h-44 bg-[#60A5FA]/85 rounded-[50%] rotate-[202deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '1.8s'}}></div>
                  <div className="absolute -bottom-20 -left-20 w-36 h-44 bg-[#89CFF0]/85 rounded-[50%] rotate-[247deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '2.2s'}}></div>
                  <div className="absolute top-1/3 -left-28 w-36 h-44 bg-[#60A5FA]/85 rounded-[50%] rotate-[292deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '2.6s'}}></div>
                  <div className="absolute bottom-1/3 -left-20 w-36 h-44 bg-[#89CFF0]/85 rounded-[50%] rotate-[337deg] animate-pulse" style={{animationDuration: '3.2s', animationDelay: '3s'}}></div>
                  
                  {/* Center petals - small ruffled look */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-32 bg-[#89CFF0] rounded-[50%] rotate-0 animate-pulse" style={{animationDuration: '3.5s'}}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-24 h-32 bg-[#60A5FA] rounded-[50%] rotate-90 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '0.875s'}}></div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-32 bg-[#89CFF0] rounded-[50%] rotate-180 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1.75s'}}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-24 h-32 bg-[#60A5FA] rounded-[50%] rotate-270 animate-pulse" style={{animationDuration: '3.5s', animationDelay: '2.625s'}}></div>
                  
                  {/* Core center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#2B6CB0] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10">
              <img 
                src="/transparentme.png" 
                alt="Dana"
                className="w-48 h-auto"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          <p className="text-lg text-[#1E293B] leading-relaxed">
            Hi! I&apos;m Dana, I&apos;m a University of British Columbia student majoring in Cognitive Systems and minoring in Applied Music Technology. 
            I love coding, music, and gaming! Throughout my degree, I have created interactive sound experiences through coding and design, and I&apos;m currently expanding my skills toward game development. 
            Eventually, I want to bring creative systems to life in immersive, playable worlds! In my spare time nowadays, I like to read books and play PC games.</p>
        
          {/* Download Resume Button */}
          <div className="mt-8">
            <a
              href="/DanaNeriaResume.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#2B6CB0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1E5A8E] transition-colors shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>

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
            Music is a big part of my life as I&apos;ve been singing since I was little and playing guitar since I was 14.
            Throughout high school, I performed in events like busking and concerts.
            I wanted to make sure I continued to nurture this passion alongside my tech interests, so I pursued a minor in Applied Music Technology at UBC.
            I also joined the UBC Music Initiative Club, where I met fellow music enthusiasts and had the chance to make music together!
          </p>
          
          {/* Music Slideshow */}
          <div className="relative bg-gradient-to-br from-white to-[#F8FAFC] rounded-xl p-4 shadow-sm">
            {musicProjects[currentSlide].mediaType === 'video' ? (
              <div className="h-[550px] w-full mb-3 flex items-center justify-center bg-black rounded-lg relative group">
                <video
                  ref={videoRef}
                  key={currentSlide}
                  className="h-full w-full object-contain rounded-lg"
                  controls
                >
                  <source src={musicProjects[currentSlide].mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => openModal(musicProjects[currentSlide])}
                  className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  Fullscreen
                </button>
              </div>
            ) : (
              <div 
                className="h-[550px] w-full mb-3 flex items-center justify-center bg-gray-100 rounded-lg cursor-pointer group relative overflow-hidden"
                onClick={() => openModal(musicProjects[currentSlide])}
              >
                <img 
                  src={musicProjects[currentSlide].mediaUrl} 
                  alt={`Music memory ${currentSlide + 1}`}
                  className="h-full w-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Click to enlarge</span>
                </div>
              </div>
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
            <h2 className="text-2xl font-semibold text-[#2B6CB0] mt-8 mb-4">Volleyball</h2>
            <p className="text-[#1E293B] mb-6 opacity-90">
              I played a lot of volleyball as a child and participated in various tournaments up until middle school. This sport taught me the importance of teamwork and dedication.
              In university, I started playing recreationally with friends. In my fourth year, I started my own team and joined the UBC intramurals league!
              While I don&apos;t play often anymore, volleyball has been a great way for me to stay active and spend time with friends.
            </p>

            {/* Volleyball Slideshow */}
          <div className="relative bg-gradient-to-br from-white to-[#F8FAFC] rounded-xl p-4 shadow-sm">
            <div 
              className="h-[550px] w-full mb-3 flex items-center justify-center bg-gray-100 rounded-lg cursor-pointer group relative overflow-hidden"
              onClick={() => openModal(volleyballPics[currentVolleyballSlide])}
            >
              <img 
                src={volleyballPics[currentVolleyballSlide].mediaUrl} 
                alt={`Volleyball memory ${currentVolleyballSlide + 1}`}
                className="h-full w-full object-contain rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Click to enlarge</span>
              </div>
            </div>
            <p className="text-[#1E293B] text-sm italic opacity-75 mb-4">{volleyballPics[currentVolleyballSlide].description}</p>
            
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevVolleyballSlide}
                className="bg-[#2B6CB0] text-white p-2 rounded-full hover:bg-[#1E5A8E] transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {volleyballPics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVolleyballSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentVolleyballSlide ? 'bg-[#2B6CB0] w-6' : 'bg-[#2B6CB0]/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextVolleyballSlide}
                className="bg-[#2B6CB0] text-white p-2 rounded-full hover:bg-[#1E5A8E] transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal for fullscreen view */}
        {isModalOpen && modalContent && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              ×
            </button>
            {modalContent.mediaType === 'video' ? (
              <video
                className="max-h-[90vh] max-w-[90vw] rounded-lg"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              >
                <source src={modalContent.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={modalContent.mediaUrl} 
                alt="Fullscreen view"
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
