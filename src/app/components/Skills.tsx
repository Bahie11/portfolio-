import { Code, Shield, Database, Terminal, Globe, Lock } from 'lucide-react';

const skillCategories = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/20',
    tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    skills: ['Network Pen Testing', 'Web App Testing', 'Privilege Escalation', 'Vulnerability Assessment', 'Security Reporting', 'Ethical Hacking']
  },
  {
    icon: Globe,
    title: 'Networking & Security',
    color: 'from-purple-500 to-pink-600',
    glow: 'shadow-purple-500/20',
    border: 'border-purple-500/20',
    tagColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    skills: ['CCNA', 'Routing & Switching', 'Network Security', 'OWASP Top 10', 'Cryptography', 'Firewalls & IDS']
  },
  {
    icon: Terminal,
    title: 'Programming Languages',
    color: 'from-green-500 to-teal-600',
    glow: 'shadow-green-500/20',
    border: 'border-green-500/20',
    tagColor: 'bg-green-500/10 text-green-300 border-green-500/20',
    skills: ['Python', 'C++', 'Java', 'Bash / Shell', 'PHP', 'JavaScript']
  },
  {
    icon: Lock,
    title: 'Security Tools',
    color: 'from-orange-500 to-red-600',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/20',
    tagColor: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    skills: ['Nmap', 'Metasploit', 'Burp Suite', 'Wireshark', 'Kali Linux', 'SQLMap']
  },
  {
    icon: Code,
    title: 'Web Development',
    color: 'from-pink-500 to-fuchsia-600',
    glow: 'shadow-pink-500/20',
    border: 'border-pink-500/20',
    tagColor: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    skills: ['HTML5', 'CSS3', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs']
  },
  {
    icon: Database,
    title: 'Systems & Databases',
    color: 'from-yellow-500 to-orange-600',
    glow: 'shadow-yellow-500/20',
    border: 'border-yellow-500/20',
    tagColor: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    skills: ['SQL', 'Linux', 'Windows Server', 'Microcontrollers', 'IoT', 'Arduino']
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)' }}>

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold text-white">
          Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-center text-cyan-400/60 mb-12 tracking-widest text-sm uppercase">What I Bring</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${category.border} bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${category.glow} group`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg mb-4 text-white font-semibold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-xs border font-medium ${category.tagColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}