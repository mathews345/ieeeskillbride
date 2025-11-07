import { Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-15T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase px-4 py-2 border border-cyan-400/30 rounded-full backdrop-blur-sm">
            IEEE SB CE Kallooppara Presents
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          SKILL BRIDGE 2.0
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Empowering Innovation Through Technology & Learning
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span>March 15-17, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span>CE Kallooppara</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#registration"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
