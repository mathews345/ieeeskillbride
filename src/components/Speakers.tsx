import { Linkedin, Twitter } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'AI Research Lead',
      company: 'Google Research',
      topic: 'Future of Artificial Intelligence',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Priya Menon',
      designation: 'Senior Cloud Architect',
      company: 'Amazon Web Services',
      topic: 'Cloud Computing & DevOps',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Arun Krishnan',
      designation: 'Cybersecurity Expert',
      company: 'Microsoft Security',
      topic: 'Modern Security Practices',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sarah Thomas',
      designation: 'Full Stack Developer',
      company: 'Meta',
      topic: 'Web Development Trends',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Vikram Singh',
      designation: 'IoT Solutions Architect',
      company: 'Intel Corporation',
      topic: 'Internet of Things',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Anjali Nair',
      designation: 'ML Engineer',
      company: 'IBM Research',
      topic: 'Machine Learning Applications',
      image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', twitter: '#' },
    },
  ];

  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Learn from industry leaders and innovators</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                <p className="text-cyan-400 text-sm mb-1">{speaker.designation}</p>
                <p className="text-slate-500 text-sm mb-4">{speaker.company}</p>

                <div className="mb-4 pb-4 border-b border-slate-800">
                  <span className="text-xs text-slate-500">Session Topic:</span>
                  <p className="text-slate-300 text-sm mt-1">{speaker.topic}</p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={speaker.social.linkedin}
                    className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400 hover:text-cyan-400" />
                  </a>
                  <a
                    href={speaker.social.twitter}
                    className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-slate-400 hover:text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
