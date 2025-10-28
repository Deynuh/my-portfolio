import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "An immersive game experience blending music and gameplay.",
      tech: ["Unity", "C#", "FMOD"],
      color: "from-[#2B6CB0] to-[#89CFF0]"
    },
    {
      title: "Project Two",
      description: "Interactive storytelling with emotional depth.",
      tech: ["Unreal Engine", "Blueprint", "Sound Design"],
      color: "from-[#60A5FA] to-[#2B6CB0]"
    },
    {
      title: "Project Three",
      description: "A creative web experience pushing boundaries.",
      tech: ["React", "Three.js", "WebGL"],
      color: "from-[#89CFF0] to-[#60A5FA]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-[#F8FAFC] to-[#DBEAFE] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 text-[#2B6CB0] hover:text-[#89CFF0] transition-colors font-semibold"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2B6CB0] to-[#89CFF0] bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-[#1E293B] opacity-80 mb-12">
          Explore my creative works and technical experiments
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`h-2 w-16 bg-gradient-to-r ${project.color} rounded-full mb-4`}></div>
              <h2 className="text-2xl font-bold text-[#2B6CB0] mb-3">{project.title}</h2>
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
          ))}
        </div>
      </div>
    </div>
  );
}
