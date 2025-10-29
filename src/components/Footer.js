import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-[#2B6CB0] to-[#89CFF0] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Connect
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Interested in collaborating or just want to chat? Reach out!
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white text-[#2B6CB0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white text-[#2B6CB0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:dana@example.com"
            className="w-14 h-14 bg-white text-[#2B6CB0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
