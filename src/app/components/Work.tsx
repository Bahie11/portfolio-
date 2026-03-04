import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import elevatorMdpImage from '../../assets/elevator_mdp.png';

const tagColors = [
  'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'bg-green-500/10 text-green-400 border-green-500/20',
  'bg-orange-500/10 text-orange-400 border-orange-500/20',
];

const projects = [
  {
    id: 1,
    title: 'Two-Pass Assembler',
    description: 'A dedicated assembler written in C++ that translates assembly language into machine code using a two-pass process. Key features include symbol table management and complex opcode resolution.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1080',
    tags: ['C++', 'Systems Programming', 'Compiler Design'],
    link: 'https://github.com/bahie11/assemblerr'
  },
  {
    id: 2,
    title: 'Simple Bank System',
    description: 'Desktop banking application built with Python. Features a graphical user interface for account management, secure transaction processing, and user history tracking.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1080',
    tags: ['Python', 'GUI', 'SQL'],
    link: 'https://github.com/bahie11/simple_bank_system'
  },
  {
    id: 3,
    title: 'Dental Clinic Website',
    description: 'A modern, responsive website designed for a dental clinic. Includes features for appointment booking, service showcases, and patient information portals.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1080',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/bahie11/DentalClinic-Website-main'
  },
  {
    id: 4,
    title: 'FCFS CPU Scheduler',
    description: 'Simulation of the First-Come First-Served (FCFS) CPU scheduling algorithm. Analyzes process execution, calculating wait times and turnaround metrics for system optimization.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080',
    tags: ['Python', 'Algorithms', 'Operating Systems'],
    link: 'https://github.com/bahie11/FCFS'
  },
  {
    id: 5,
    title: 'IDS V2 (TensorFlow)',
    description: 'Sequence-level Intrusion Detection System utilizing Packet-Level 1-D CNN and LSTM Autoencoders implemented in TensorFlow/Keras for efficient anomaly detection.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'Deep Learning'],
    link: 'https://github.com/bahie11/IDSV2'
  },
  {
    id: 6,
    title: 'Elevator MDP',
    description: 'Intelligent elevator control system using Markov Decision Processes (MDP). Optimizes floor scheduling and minimizes passenger wait times through reinforcement learning strategies.',
    image: elevatorMdpImage,
    tags: ['Python', 'Reinforcement Learning', 'AI'],
    link: 'https://github.com/bahie11/MDP'
  },
  {
    id: 7,
    title: 'Neural Network Framework',
    description: 'PyTorch-based implementation of advanced neural network architectures, focusing on CNN-LSTM Autoencoders for robust sequence analysis and pattern recognition.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1080',
    tags: ['Python', 'PyTorch', 'Neural Networks'],
    link: 'https://github.com/bahie11/NN'
  }
];

export function Work() {
  return (
    <section id="work" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d1117 0%, #0a0a0f 100%)' }}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold text-white">
          Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="text-center text-cyan-400/60 mb-12 tracking-widest text-sm uppercase">Projects & Builds</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-56 overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl mb-2 text-white font-semibold group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs border font-medium ${tagColors[(idx + i) % tagColors.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}