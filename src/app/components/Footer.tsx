import { Github, Linkedin, Mail, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 overflow-hidden" style={{ background: '#0a0a0f' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mahmoud Elbahie
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bahie11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-2 text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} Mahmoud Elbahie · Penetration Tester & Cybersecurity Professional
          </p>
        </div>
      </div>
    </footer>
  );
}