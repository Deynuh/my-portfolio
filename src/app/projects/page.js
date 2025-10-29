'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projectCategories = {
    webApps: [
      {
        title: "DAhandler",
        description: "Legal workflow automation tool that syncs with Outlook calendars to streamline trial event management. Saves 10+ hours weekly for a team of 20+ legal professionals.",
        tech: ["Vue.js", "JavaScript", "Python", "HTML/CSS", "Outlook API"],
        color: "from-orange-500 to-amber-400" 
      },
      {
        title: "Litigation Checklist Calculator",
        description: "Dates and deadlines calculator for legal teams that reduces scheduling conflicts during high-volume case periods. Built in 3 days with a responsive, user-friendly interface for 20+ legal professionals.",
        tech: ["React", "Vite", "HTML", "CSS"],
        color: "from-orange-600 to-orange-400"
      },
      {
        title: "AMT Portfolio",
        description: "Portfolio showcasing my works in Applied Music Technology. My first attempt at creating a responsive website portfolio.",
        tech: ["React", "Vite", "HTML", "CSS"],
        color: "from-amber-500 to-yellow-400" 
      },
      {
        title: "What's Cookin'?",
        description: "A recipe and restaurant manager that decides a user’s meal based on stored recipes and restaurants.",
        tech: ["Java", "JUnit", "Swing GUI"],
        color: "from-amber-500 to-yellow-400" 
      },
    ],
    musicTech: [
      {
        title: "LoopMax",
        description: "Live performance audio looper with real-time effects processing. Features 15 simultaneous loops, modular patch system with count-in and metronome.",
        tech: ["Max", "Jitter", "Audio Processing"],
        color: "from-purple-500 to-pink-500" 
      },
      {
        title: "Shrinking Islands",
        description: "Interactive musical performance piece using Xbox Kinect to track dancer movements in Max. Premiered to 80+ attendees at University of the Philippines Diliman after a 2-week creative residency.",
        tech: ["Max", "Unity", "C#"],
        color: "from-pink-500 to-purple-400"
      },
      {
        title: "The Pianist",
        description: "Interactive audio-visual performance piece using Xbox Kinect to track dancer movements in real-time. Transforms a Unity piano into an audio-reactive instrument with particle systems and adaptive lighting responding to musical intensity.",
        tech: ["Max", "Unity", "C#"],
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Bells",
        description: "Motion-tracked performance piece with custom granular synthesis. Dancer movements control a Gen-based synthesizer programmed in CodeBox.",
        tech: ["Max", "Gen"],
        color: "from-purple-600 to-purple-400" 
      },
      {
        title: "CosmicEchoes",
        description: "5-minute interactive musical performance using Xbox Kinect to track dancer movements. Created dancer-controlled video elements in Jitter that respond to real-time motion data.",
        tech: ["Max", "Jitter"],
        color: "from-pink-600 to-purple-500" 
      },
      {
        title: "Dissociation",
        description: "Live contemporary music piece featuring precisely timed vocal sample processing and manipulation. Performed and controlled voice line edits throughout the performance.",
        tech: ["Max/MSP", "Live Audio Processing"],
        color: "from-purple-600 to-purple-400" 
      }
    ],
    games: [
      {
        title: "Death Kitchen",
        description: "Fast-paced co-op cooking horror game where players serve dangerous alien customers. Recently joined the development team to contribute to character systems and multiplayer mechanics.",
        tech: ["Unity", "C#", "Multiplayer"],
        color: "from-emerald-500 to-teal-500",
        inDevelopment: true
      }
    ]
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <div className={`h-2 w-16 bg-gradient-to-r ${project.color} rounded-full`}></div>
        {project.inDevelopment && (
          <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
            In Development
          </span>
        )}
      </div>
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
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 text-[#2B6CB0] hover:text-[#89CFF0] transition-colors font-semibold"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2B6CB0] to-[#89CFF0] bg-clip-text text-transparent pb-5">
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
