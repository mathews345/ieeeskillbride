import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href === '#home' ? 'body' : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2 group">
            <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <span className="text-white font-bold text-xl">SKILL BRIDGE 2.0</span>
              <p className="text-xs text-slate-400">IEEE SB CE Kallooppara</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#registration"
              onClick={(e) => handleClick(e, '#registration')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Register
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-lg border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#registration"
              onClick={(e) => handleClick(e, '#registration')}
              className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
