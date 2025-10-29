'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projectCategories = {
    webApps: [
      {
        title: "DAhandler",
        description: "Legal workflow automation tool that syncs with Outlook calendars to streamline trial event management. Saves 10+ hours weekly for a team of 20+ legal professionals.",
        tech: ["Vue.js", "JavaScript", "Python", "HTML/CSS", "Outlook API"],
        color: "from-orange-500 to-amber-400",
        image: "/dahandler.png",
        furtherInfo: "Developed the front-end component and a bit of the back-end component to ensure a pleasant user experience and seamless calendar integration for legal teams. For company privacy reasons, I am unable to provide links to the repository and app.",
      },
      {
        title: "Litigation Checklist Calculator",
        description: "Dates and deadlines calculator for legal teams that reduces scheduling conflicts during high-volume case periods. Built in 3 days with a responsive, user-friendly interface for 20+ legal professionals.",
        tech: ["React", "Vite", "HTML", "CSS"],
        color: "from-orange-600 to-orange-400",
        image: "/litchecklist.png",
        furtherInfo: "Developed a responsive, user-friendly interface that accommodates the needs of legal professionals. Ensured that special dates such as public holidays are taken into account.",
        links: [
          { label: "Website", url: "https://deynuh.github.io/Litigation-Checklist-Calculator/", icon: true},
          { label: "GitHub Repo", url: "https://github.com/Deynuh/Litigation-Checklist-Calculator", iconImage: "/github.png"}
        ]
      },
      {
        title: "AMT Portfolio",
        description: "Portfolio showcasing my works in Applied Music Technology. My first attempt at creating a responsive website portfolio.",
        tech: ["React", "Vite", "HTML", "CSS"],
        color: "from-amber-500 to-yellow-400",
        image: "/amtportfolio.png",
        furtherInfo: "Showcased my skills in web development and design through a personal portfolio website. Implemented responsive design principles to ensure a seamless experience across devices.",
        links: [
          { label: "Website", url: "https://deynuh.github.io/amt-portfolio/", icon: true},
          { label: "GitHub Repo", url: "https://github.com/Deynuh/amt-portfolio", iconImage: "/github.png"}
        ]
      },
      {
        title: "What's Cookin'?",
        description: "A recipe and restaurant manager that decides a user’s meal based on stored recipes and restaurants.",
        tech: ["Java", "JUnit", "Swing GUI"],
        color: "from-amber-500 to-yellow-400",
        image: "/whatscookin.png",
        furtherInfo: "Developed a Java Swing application that allows users to manage recipes and restaurants. Implemented a randomizatrion system that suggests meals based on saved restaurants and recipes.",
        links: [
          { label: "GitHub Repo", url: "https://github.com/Deynuh/WhatsCookin", iconImage: "/github.png"}
        ]
      },
    ],
    musicTech: [
      {
        title: "LoopMax",
        description: "Live performance audio looper with real-time effects processing. Features 15 simultaneous loops, modular patch system with count-in and metronome.",
        tech: ["Max", "Jitter", "Audio Processing"],
        color: "from-purple-500 to-pink-500",
        image: "/loopmax.jpg", //maybe add performance video if can still find
        links: [
          { label: "Project Website", url: "https://dneria1.wixsite.com/loopmax", icon: true}
        ]
      },
      {
        title: "Shrinking Islands",
        description: "Interactive musical performance piece using Xbox Kinect to track dancer movements in Max. Premiered to 80+ attendees at University of the Philippines Diliman after a 2-week creative residency.",
        tech: ["Max", "Unity", "C#"],
        color: "from-pink-500 to-purple-400",
        image: "/island.jpg", //ADD CREDITS TO THE IMAGE, also add more photos and explanation that it was streamed live but not recorded
        links: [
          { label: "Creative Residency Video", url: "https://www.youtube.com/watch?v=2uWa_zclqPQ", iconImage: "/youtube.png"}
        ]
      },
      {
        title: "The Pianist",
        description: "Interactive audio-visual performance piece using Xbox Kinect to track dancer movements in real-time. Transforms a Unity piano into an audio-reactive instrument with particle systems and adaptive lighting responding to musical intensity.",
        tech: ["Max", "Unity", "C#"],
        color: "from-purple-500 to-pink-500",
        image: "/piano.jpg", //ADD CREDITS TO THE IMAGE
        links: [
          { label: "Performance Video", url: "https://www.youtube.com/watch?v=RNM0_BtZe2Y", iconImage: "/youtube.png"}
        ]
      },
      {
        title: "Bells",
        description: "Motion-tracked performance piece with custom granular synthesis. Dancer movements control a Gen-based synthesizer programmed in CodeBox.",
        tech: ["Max", "Gen"],
        color: "from-purple-600 to-purple-400",
        image: "/bells.png",
        links: [
          { label: "Performance Video", url: "https://www.youtube.com/watch?v=ug2vfM7eUQk", iconImage: "/youtube.png"}
        ]
      },
      {
        title: "CosmicEchoes",
        description: "5-minute interactive musical performance using Xbox Kinect to track dancer movements. Created dancer-controlled video elements in Jitter that respond to real-time motion data.",
        tech: ["Max", "Jitter"],
        color: "from-pink-600 to-purple-500",
        image: "/cosmicechoes.png",
        links: [
          { label: "Performance Video", url: "https://www.youtube.com/watch?v=w0Dtyzz1HA8", iconImage: "/youtube.png"}
        ]
      },
      {
        title: "Dissociation",
        description: "Live contemporary music piece featuring precisely timed vocal sample processing and manipulation. Performed and controlled voice line edits throughout the performance.",
        tech: ["Max/MSP", "Live Audio Processing"],
        color: "from-purple-600 to-purple-400",
        image: "/dissociation.png", 
        links: [
          { label: "Performance Video", url: "https://www.youtube.com/watch?v=eNm__0OqPkI", iconImage: "/youtube.png"}
        ]
      }
    ],
    games: [
      {
        title: "Death Kitchen",
        description: "Fast-paced co-op cooking horror game where players serve dangerous alien customers. Recently joined the development team to contribute to character systems and multiplayer mechanics.",
        tech: ["Unity", "C#", "Multiplayer"],
        color: "from-emerald-500 to-teal-500",
        image: "/deathkitchen.jpg",
        inDevelopment: true,
        links: [
          { label: "Steam Page", url: "https://store.steampowered.com/app/3603380/Death_Kitchen/", iconImage: "/steam.png" }, 
          { label: "Studio Page", url: "https://www.gamedevelopment.ca/studio", icon: true}
        ]
      }
    ]
  };

  const ProjectCard = ({ project }) => (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => openModal(project)}
    >
      {/* Project Image/Banner */}
      {project.image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
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
        <div className="mt-4 text-[#2B6CB0] text-sm font-semibold">
          Click for more details →
        </div>
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

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scroll-smooth"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-3xl">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`h-2 w-20 bg-gradient-to-r ${selectedProject.color} rounded-full`}></div>
                      {selectedProject.inDevelopment && (
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                          In Development
                        </span>
                      )}
                    </div>
                    <h2 className="text-4xl font-bold text-[#2B6CB0]">{selectedProject.title}</h2>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-4xl font-light leading-none ml-4"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-8 py-6">
                {/* Project Image/Banner */}
                {selectedProject.image && (
                  <div className="mb-6 -mx-8 -mt-6">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#2B6CB0] mb-3">Overview</h3>
                  <p className="text-[#1E293B] leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#2B6CB0] mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-[#E3F2FD] text-[#2B6CB0] px-4 py-2 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Details Section - You can customize per project */}
                {selectedProject.details && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#2B6CB0] mb-3">Details</h3>
                    <p className="text-[#1E293B] leading-relaxed whitespace-pre-line">{selectedProject.details}</p>
                  </div>
                )}

                {selectedProject.furtherInfo && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#2B6CB0] mb-3">Further Information</h3>
                    <p className="text-[#1E293B] leading-relaxed whitespace-pre-line">{selectedProject.furtherInfo}</p>
                  </div>
                )}

                {selectedProject.achievements && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#2B6CB0] mb-3">Key Achievements</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#1E293B]">
                      {selectedProject.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.links && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#2B6CB0] mb-3">
                      {selectedProject.links.length === 1 ? 'Link' : 'Links'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2B6CB0] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1E5A8E] transition-colors flex items-center gap-2"
                        >
                          {link.iconImage && (
                            <img src={link.iconImage} alt="" className="w-5 h-5 brightness-0 invert" />
                          )}
                          {link.icon && !link.iconImage && <ExternalLink size={18} />}
                          {link.label}
                          {!link.icon && !link.iconImage && ' →'}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
