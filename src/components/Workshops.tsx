import { Code, Cpu, Brain, Cloud, Shield, Layers } from 'lucide-react';

export default function Workshops() {
  const sessions = [
    {
      icon: Code,
      title: 'Modern Web Development',
      topic: 'React, TypeScript & Modern Frontend',
      description: 'Master the latest web technologies including React 18, TypeScript, and modern development practices. Build responsive, performant applications with industry-standard tools.',
      duration: '3 hours',
      level: 'Intermediate',
    },
    {
      icon: Cpu,
      title: 'IoT & Embedded Systems',
      topic: 'Arduino, ESP32 & Sensor Integration',
      description: 'Dive into the world of Internet of Things. Learn to build connected devices, integrate sensors, and create real-world IoT applications using Arduino and ESP32.',
      duration: '3 hours',
      level: 'Beginner',
    },
    {
      icon: Brain,
      title: 'Machine Learning Fundamentals',
      topic: 'Python, TensorFlow & Neural Networks',
      description: 'Explore the foundations of machine learning and AI. Understand neural networks, train models, and implement practical ML solutions using Python and TensorFlow.',
      duration: '3 hours',
      level: 'Intermediate',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing & DevOps',
      topic: 'AWS, Docker & CI/CD Pipelines',
      description: 'Learn modern cloud infrastructure and DevOps practices. Deploy applications, manage containers with Docker, and automate workflows with CI/CD pipelines.',
      duration: '3 hours',
      level: 'Intermediate',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Essentials',
      topic: 'Network Security & Ethical Hacking',
      description: 'Understand security fundamentals, common vulnerabilities, and defensive strategies. Learn ethical hacking techniques and how to protect systems from threats.',
      duration: '2 hours',
      level: 'Beginner',
    },
    {
      icon: Layers,
      title: 'Full Stack Development',
      topic: 'Node.js, Databases & API Design',
      description: 'Build complete web applications from scratch. Learn backend development with Node.js, database design, RESTful API creation, and full stack architecture.',
      duration: '3 hours',
      level: 'Advanced',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermediate':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'Advanced':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default:
        return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  return (
    <section id="workshops" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Workshops & Talks
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Hands-on sessions led by industry experts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="inline-block p-3 bg-cyan-500/10 rounded-lg mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <session.icon className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
              <p className="text-cyan-400 text-sm mb-4">{session.topic}</p>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{session.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{session.duration}</span>
                <span className={`text-xs px-3 py-1 rounded-full border ${getLevelColor(session.level)}`}>
                  {session.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
