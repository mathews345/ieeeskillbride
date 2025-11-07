import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-white font-bold">SKILL BRIDGE 2.0</span>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering innovation through technology and learning. Organized by IEEE SB CE Kallooppara.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Schedule', 'Workshops', 'Speakers', 'Registration'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Event Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">March 15-17, 2025</li>
              <li className="text-slate-400">CE Kallooppara</li>
              <li className="text-slate-400">Kerala, India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>ieee@cekallooppara.ac.in</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Pathanamthitta, Kerala</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} IEEE Student Branch CE Kallooppara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
