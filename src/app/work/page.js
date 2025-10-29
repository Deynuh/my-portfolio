import Link from 'next/link';

export default function Work() {
  const workExperience = [
    {
      title: "Game Developer",
      company: "Company Name",
      period: "2023 - Present",
      description: "Developing immersive game experiences with focus on audio integration and player engagement.",
      achievements: [
        "Built interactive game mechanics using Unity and C#",
        "Implemented dynamic audio systems with FMOD",
        "Collaborated with designers to create compelling gameplay"
      ]
    },
    {
      title: "Creative Technologist",
      company: "Previous Company",
      period: "2021 - 2023",
      description: "Created interactive web experiences and music technology projects.",
      achievements: [
        "Developed web applications using React and Next.js",
        "Built audio visualization tools with Web Audio API",
        "Led cross-functional teams on creative projects"
      ]
    },
    {
      title: "Junior Developer",
      company: "Earlier Company",
      period: "2019 - 2021",
      description: "Started career building web applications and learning game development.",
      achievements: [
        "Contributed to front-end development projects",
        "Learned Unity and game design fundamentals",
        "Participated in game jams and creative coding challenges"
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
                  <h3 className="text-xl text-[#1E293B] font-semibold mb-2">
                    {job.company}
                  </h3>
                </div>
                <span className="text-[#2B6CB0] font-medium bg-[#E3F2FD] px-4 py-2 rounded-full inline-block">
                  {job.period}
                </span>
              </div>
              
              <p className="text-[#1E293B] leading-relaxed mb-4">
                {job.description}
              </p>
              
              <div className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#2B6CB0] mt-1">•</span>
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
