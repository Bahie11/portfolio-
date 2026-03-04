import { Github, Linkedin, Mail, Shield } from 'lucide-react';
import profileImage from '../../assets/profile.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0a1a 100%)' }}>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">

          {/* Profile image with glowing ring */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-md opacity-70 scale-110" />
            <img
              src={profileImage}
              alt="Mahmoud Elbahie"
              className="relative w-36 h-36 mx-auto rounded-full object-cover border-2 border-cyan-400/50"
            />
            {/* Security badge */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 text-white font-bold">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mahmoud Elbahie
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-cyan-300/80 mb-4 max-w-2xl mx-auto font-medium">
            Penetration Tester & Cybersecurity Professional
          </p>
          <p className="text-base text-gray-400 mb-4 max-w-xl mx-auto">
            CCNA Certified · DEPI Penetration Testing Track · Ethical Hacker
          </p>

          <p className="text-gray-500 mb-10">
            📍 New Cairo, Egypt
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/bahie11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400 transition-all hover:shadow-lg hover:shadow-pink-500/20"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('work');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}