import { Clock } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      day: 'Day 1',
      date: 'March 15, 2025',
      events: [
        { time: '09:00 AM', title: 'Registration & Welcome', type: 'general' },
        { time: '10:00 AM', title: 'Inauguration Ceremony', type: 'general' },
        { time: '11:00 AM', title: 'Keynote: Future of AI in Industry', type: 'talk' },
        { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
        { time: '02:00 PM', title: 'Workshop: Web Development with React', type: 'workshop' },
        { time: '04:00 PM', title: 'Networking Session', type: 'general' },
      ],
    },
    {
      day: 'Day 2',
      date: 'March 16, 2025',
      events: [
        { time: '09:00 AM', title: 'Workshop: IoT & Embedded Systems', type: 'workshop' },
        { time: '11:00 AM', title: 'Talk: Career Paths in Tech', type: 'talk' },
        { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
        { time: '02:00 PM', title: 'Workshop: Machine Learning Fundamentals', type: 'workshop' },
        { time: '04:00 PM', title: 'Panel Discussion: Innovation & Entrepreneurship', type: 'talk' },
        { time: '05:30 PM', title: 'Technical Quiz Competition', type: 'general' },
      ],
    },
    {
      day: 'Day 3',
      date: 'March 17, 2025',
      events: [
        { time: '09:00 AM', title: 'Workshop: Cloud Computing & DevOps', type: 'workshop' },
        { time: '11:00 AM', title: 'Talk: Cybersecurity Best Practices', type: 'talk' },
        { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
        { time: '02:00 PM', title: 'Project Showcase & Presentations', type: 'general' },
        { time: '04:00 PM', title: 'Prize Distribution & Closing Ceremony', type: 'general' },
      ],
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'workshop':
        return 'border-cyan-500/50 bg-cyan-500/10';
      case 'talk':
        return 'border-blue-500/50 bg-blue-500/10';
      case 'break':
        return 'border-slate-600/50 bg-slate-800/30';
      default:
        return 'border-slate-700/50 bg-slate-900/30';
    }
  };

  return (
    <section id="schedule" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Three days of learning, networking, and innovation</p>
        </div>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">{day.day}</h3>
                <p className="text-slate-400">{day.date}</p>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`flex items-start gap-4 p-4 border rounded-lg ${getEventColor(event.type)} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-300 font-semibold">{event.time}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{event.title}</h4>
                    </div>
                    <div className="hidden md:block">
                      <span className="text-xs uppercase tracking-wider text-slate-500 px-3 py-1 bg-slate-800/50 rounded-full">
                        {event.type}
                      </span>
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
