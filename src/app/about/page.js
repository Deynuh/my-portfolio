import Link from 'next/link';

export default function About() {
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
            Hi! I'm Dana, a passionate game developer and creative technologist who loves blending 
            technology, music, and emotion to create meaningful interactive experiences.
          </p>
          
          <p className="text-lg text-[#1E293B] leading-relaxed">
            My journey in game development started with a fascination for how games can tell stories 
            and evoke emotions in ways that other mediums can't. I specialize in creating immersive 
            experiences that combine technical innovation with artistic expression.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2B6CB0] mt-8 mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Unity', 'Unreal Engine', 'C#', 'JavaScript', 'React', 'Next.js', 'Game Design', 'Sound Design', 'UI/UX'].map((skill) => (
              <div key={skill} className="bg-[#E3F2FD] px-4 py-2 rounded-lg text-center text-[#2B6CB0] font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
