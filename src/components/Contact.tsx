import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">We're here to answer your questions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-slate-400">
                    College of Engineering Kallooppara<br />
                    Pathanamthitta District<br />
                    Kerala, India - 689696
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:ieee@cekallooppara.ac.in" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    ieee@cekallooppara.ac.in
                  </a>
                  <br />
                  <a href="mailto:skillbridge@cekallooppara.ac.in" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    skillbridge@cekallooppara.ac.in
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-slate-400">
                    +91 9876543210<br />
                    +91 9876543211
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-2 overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.8674853826363!2d76.57886831478294!3d9.388888093066784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d0c5ff5b1e1%3A0x6c6e3c9f5c5e5e5e!2sCollege%20of%20Engineering%20Kallooppara!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
