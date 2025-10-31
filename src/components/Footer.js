import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-[#2B6CB0] to-[#89CFF0] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Interested in collaborating or just want to chat? Reach out!
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/Deynuh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white text-[#2B6CB0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dana-angela-neria/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white text-[#2B6CB0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a
            href="mailto:dananeria@icloud.com"
            className="w-14 h-14 bg-white text-[#2B6CB0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
