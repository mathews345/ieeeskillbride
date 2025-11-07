import { Zap, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Skill Bridge 2.0
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">The Event</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Skill Bridge 2.0 is a premier technical symposium designed to bridge the gap between academic learning and industry requirements. Over three days, participants will engage in intensive workshops, inspiring talks, and hands-on sessions led by industry experts.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This event brings together students, professionals, and innovators to explore cutting-edge technologies, develop practical skills, and network with like-minded individuals passionate about shaping the future of technology.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">IEEE SB CE Kallooppara</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              The IEEE Student Branch at College of Engineering Kallooppara is a dynamic community of technology enthusiasts committed to fostering innovation, technical excellence, and professional development among students.
            </p>
            <p className="text-slate-300 leading-relaxed">
              As part of the world's largest technical professional organization, our student branch organizes workshops, technical talks, competitions, and networking events that empower students to stay ahead in the rapidly evolving technological landscape.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: '15+ Sessions',
              description: 'Workshops, talks, and hands-on technical sessions',
            },
            {
              icon: Users,
              title: '500+ Participants',
              description: 'Students and professionals from across the region',
            },
            {
              icon: Trophy,
              title: 'Industry Experts',
              description: 'Learn from leading professionals and innovators',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-8 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="inline-block p-4 bg-cyan-500/10 rounded-lg mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <item.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
