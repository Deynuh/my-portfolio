import Link from 'next/link';

export default function Work() {
  const workExperience = [
    {
      title: "Software Developer",
      company: "UBC Emerging Media Lab",
      period: "Feb 2026 - Present",
      description: "Working on the Procedural Poetry Funhouse Project, an Unreal Engine 5 experience that uses AI and VR to reimagine poetry as a physical space.",
      tech: ["Unreal Engine 5", "C++", "Blueprints"],
      achievements: [
        // UPDATE ONCE I HAVE MORE TO ADD
      ]
    },
    {
      title: "Programmer, Level Designer",
      company: "Nicknation Games",
      period: "Nov 2025 - Present",
      description: "Collaborating remotely with a primarily Hong Kong-based indie team to develop a top-down 3D roguelike action game.",
      tech: ["Unity", "C#", "Level Design", "Boss Fight Mechanics"],
      achievements: [
        "Fixed gameplay bugs while maintaing code quality and smooth integration across time zones",
        "Developed boss behaviours and boss fight mechanics using Unity and C#",
        "Used ProBuilder to design and build levels, ensuring they are engaging and well-optimized for performance"
      ]
    },
    {
      title: "Programmer",
      company: "Eternal Blaze Studios",
      period: "Oct 2025 - Present",
      description: "Developing game experience with focus on atmosphere, multiplayer aspects, and player engagement.",
      tech: ["Unity", "C#", "UI/UX", "Atmosphere Design"],
      achievements: [
        "Designed immersive horror atmosphere through dynamic lighting systems and visual effects programming",
        "Redesigned UI/UX elements to enhance player engagement and improve overall user experience",
      ]
    },
    {
      title: "Sound Team Executive",
      company: "UBC Music Initiative",
      period: "Jan 2023 - Oct 2025",
      description: "Managed audio systems and organized music events for the university community.",
      tech: ["Audio Systems", "Event Management"],
      achievements: [
        "Set up and managed audio equipment for live performances",
        "Organized bi-weekly to monthly music events and jam sessions",
      ]
    },
    {
      title: "Java and Web Development Tutor",
      company: "The C.O.D.E. Initiative Foundation",
      period: "Jan 2023 - Mar 2023",
      description: "Taught Java programming and web development to beginners through structured lessons and hands-on projects.",
      tech: ["Java", "Web Development", "Teaching"],
      achievements: [
        "Empowered students to build their own web applications",
        "Encouraged problem-solving and coding best practices",
      ]
    }
  ];

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
          Work History
        </h1>
        <p className="text-xl text-[#1E293B] opacity-80 mb-12">
          My professional journey and experiences
        </p>
        
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2B6CB0] mb-2">
                    {job.title}
                  </h2>
                  <h3 className="text-xl text-[#1E293B] font-semibold">
                    {job.company}
                  </h3>
                </div>
                <span className="text-[#2B6CB0] font-medium bg-[#E3F2FD] px-4 py-2 rounded-full inline-block">
                  {job.period}
                </span>
              </div>

               <div className="flex flex-wrap gap-2 mb-4 -ml-1">
                {job.tech && job.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-[#E3F2FD] text-[#2B6CB0] px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-[#1E293B] leading-relaxed mb-4">
                {job.description}
              </p>
              
              <div className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#2B6CB0]">•</span>
                    <p className="text-[#1E293B]">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
