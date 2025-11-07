import { Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      category: 'Faculty Coordinators',
      members: [
        { name: 'Dr. Suresh Kumar', role: 'Faculty Advisor', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Prof. Lakshmi Menon', role: 'Technical Coordinator', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300' },
      ],
    },
    {
      category: 'Student Coordinators',
      members: [
        { name: 'Adithya Krishna', role: 'Event Lead', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Meera Nair', role: 'Technical Lead', image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Rahul Varma', role: 'Workshop Coordinator', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Divya Sharma', role: 'Registration Lead', image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=300' },
      ],
    },
    {
      category: 'Core Team',
      members: [
        { name: 'Karthik Menon', role: 'Marketing Head', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Anjana Raj', role: 'Design Lead', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Vishnu Kumar', role: 'Sponsorship Head', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Sreelakshmi M', role: 'Media Coordinator', image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Amal Dev', role: 'Logistics Head', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Kavya Krishnan', role: 'Hospitality Lead', image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300' },
      ],
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Organizing Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Meet the people behind Skill Bridge 2.0</p>
        </div>

        <div className="space-y-16">
          {team.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-800">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    </div>

                    <div className="p-4">
                      <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                      <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                      <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
