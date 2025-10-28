'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projectCategories = {
    webApps: [
      {
        title: "Web Project One",
        description: "A creative web experience pushing boundaries.",
        tech: ["React", "Three.js", "WebGL"],
        color: "from-[#60A5FA] to-[#89CFF0]"
      },
      {
        title: "Web Project Two",
        description: "Interactive portfolio showcasing creative coding.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        color: "from-[#89CFF0] to-[#2B6CB0]"
      }
    ],
    musicTech: [
      {
        title: "Music Tech Project One",
        description: "Interactive audio visualization and manipulation tool.",
        tech: ["Max/MSP", "Pure Data", "Web Audio API"],
        color: "from-[#89CFF0] to-[#60A5FA]"
      },
      {
        title: "Music Tech Project Two",
        description: "Procedural music generation system.",
        tech: ["JavaScript", "Tone.js", "MIDI"],
        color: "from-[#2B6CB0] to-[#89CFF0]"
      }
    ],
    games: [
      {
        title: "Game Project One",
        description: "An immersive game experience blending music and gameplay.",
        tech: ["Unity", "C#", "FMOD"],
        color: "from-[#2B6CB0] to-[#89CFF0]"
      },
      {
        title: "Game Project Two",
        description: "Interactive storytelling with emotional depth.",
        tech: ["Unreal Engine", "Blueprint", "Sound Design"],
        color: "from-[#60A5FA] to-[#2B6CB0]"
      }
    ]
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className={`h-2 w-16 bg-gradient-to-r ${project.color} rounded-full mb-4`}></div>
      <h3 className="text-2xl font-bold text-[#2B6CB0] mb-3">{project.title}</h3>
      <p className="text-[#1E293B] mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span 
            key={i} 
            className="text-xs bg-[#E3F2FD] text-[#2B6CB0] px-3 py-1 rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'webApps', label: 'Web & Apps' },
    { id: 'musicTech', label: 'Music Tech' },
    { id: 'games', label: 'Games' }
  ];

  const getProjectsToDisplay = () => {
    if (activeCategory === 'all') {
      return [...projectCategories.webApps, ...projectCategories.musicTech, ...projectCategories.games];
    }
    return projectCategories[activeCategory];
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
          My Projects
        </h1>
        <p className="text-xl text-[#1E293B] opacity-80 mb-12">
          Explore my creative works and technical experiments
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#2B6CB0] text-white shadow-lg scale-105'
                  : 'bg-white/80 text-[#2B6CB0] hover:bg-white hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getProjectsToDisplay().map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
