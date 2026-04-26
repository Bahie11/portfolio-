import profileImage from '../../assets/profile.png';

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)' }}>

      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold text-white">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-center text-cyan-400/60 mb-12 tracking-widest text-sm uppercase">Who I Am</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 space-y-5">
            <p className="text-gray-300 leading-relaxed">
              I am an <span className="text-cyan-400 font-medium">Artificial Intelligence student</span> at the Egyptian Japanese University for Science and Technology with a strong passion for developing intelligent systems. My focus is on machine learning, data analysis, and AI fundamentals, combined with solid problem-solving abilities and a commitment to building robust and ethical AI solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently in my third year studying <span className="text-purple-400 font-medium">Computer Networks and Cyber Security</span> at the Faculty of Computer Science and Information Technology, I maintain a strong academic record with predicted First Class Honours. My education has given me a comprehensive foundation in both theoretical AI concepts and practical software engineering.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond academics, I have demonstrated <span className="text-pink-400 font-medium">leadership and impact through volunteering</span>, serving as PR and Fundraising Head at INGENIUM E-JUST and IEEE E-JUST. I have successfully organized major events, managed teams of 16+ members, increased member retention by 78%, and secured significant sponsorships for chapter initiatives.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am driven by curiosity, excellent communication skills, and adaptability. I aspire to pursue a career in artificial intelligence, machine learning, and software engineering, with a commitment to developing ethical and responsible AI systems.
            </p>
          </div>

          <div className="order-1 md:order-2 space-y-4">
            {/* Profile image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
              <img
                src={profileImage}
                alt="Mahmoud Elbahie"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Expertise Areas */}
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
              <p className="text-purple-400 font-semibold mb-4 uppercase tracking-wider text-sm">Core Expertise</p>
              <ul className="space-y-2">
                {[
                  'Machine Learning & Deep Learning',
                  'Natural Language Processing (NLP)',
                  'Data Analysis & Visualization',
                  'Artificial Intelligence Fundamentals',
                  'Model Training & Optimization',
                  'Python for AI/ML (NumPy, Pandas, Matplotlib)',
                  'Frontend Web Development',
                  'AI Ethics & Responsible AI',
                  'Leadership & Team Management',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}