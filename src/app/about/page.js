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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-[#F8FAFC] to-[#DBEAFE] py-16 px-6">
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
            {['Unity', 'C#', 'Java', 'JavaScript', 'React', 'Next.js', 'Game Design', 'Sound Design', 'UI/UX', 'Max'].map((skill) => (
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
        </div>
      </div>
    </div>
  );
}
