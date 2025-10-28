import Link from 'next/link';

export default function About() {
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
      description: 'Brief description or caption for this moment.',
      mediaType: 'video', // 'video' or 'image'
      mediaUrl: '/your-video.mp4', // Put videos in public folder
    },
    {
      description: 'Another caption or memory.',
      mediaType: 'image',
      mediaUrl: '/path-to-your-image.jpg', // Put images in public folder
    },
    // Add more as needed
  ];

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
          <div className="space-y-6">
            {musicProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-xl p-4 shadow-sm">
                {project.mediaType === 'video' ? (
                  <div className="aspect-video w-full mb-3">
                    <video
                      width="100%"
                      height="100%"
                      controls
                      className="rounded-lg"
                    >
                      <source src={project.mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <img 
                    src={project.mediaUrl} 
                    alt={`Music memory ${index + 1}`}
                    className="w-full rounded-lg shadow-sm mb-3"
                  />
                )}
                <p className="text-[#1E293B] text-sm italic opacity-75">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
