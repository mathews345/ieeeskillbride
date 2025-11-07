export default function Sponsors() {
  const sponsors = [
    {
      tier: 'Platinum Sponsors',
      companies: [
        { name: 'TechCorp', logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=200' },
        { name: 'InnovateLabs', logo: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=200' },
      ],
    },
    {
      tier: 'Gold Sponsors',
      companies: [
        { name: 'CloudSystems', logo: 'https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=200' },
        { name: 'DataFlow', logo: 'https://images.pexels.com/photos/7688468/pexels-photo-7688468.jpeg?auto=compress&cs=tinysrgb&w=200' },
        { name: 'SecureNet', logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=200' },
      ],
    },
    {
      tier: 'Silver Sponsors',
      companies: [
        { name: 'DevTools', logo: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=200' },
        { name: 'CodeCraft', logo: 'https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=200' },
        { name: 'DigitalEdge', logo: 'https://images.pexels.com/photos/7688468/pexels-photo-7688468.jpeg?auto=compress&cs=tinysrgb&w=200' },
        { name: 'WebMakers', logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=200' },
      ],
    },
  ];

  const getTierStyles = (tier: string) => {
    switch (tier) {
      case 'Platinum Sponsors':
        return { textColor: 'text-slate-200', size: 'w-40 h-40' };
      case 'Gold Sponsors':
        return { textColor: 'text-yellow-400', size: 'w-32 h-32' };
      case 'Silver Sponsors':
        return { textColor: 'text-slate-400', size: 'w-24 h-24' };
      default:
        return { textColor: 'text-slate-400', size: 'w-24 h-24' };
    }
  };

  return (
    <section id="sponsors" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Powered by industry leaders</p>
        </div>

        <div className="space-y-16">
          {sponsors.map((tier, tierIndex) => {
            const styles = getTierStyles(tier.tier);
            return (
              <div key={tierIndex}>
                <h3 className={`text-2xl font-bold ${styles.textColor} mb-8 text-center`}>
                  {tier.tier}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {tier.companies.map((company, companyIndex) => (
                    <div
                      key={companyIndex}
                      className={`${styles.size} bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center group hover:scale-110`}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto mb-2 group-hover:bg-slate-700 transition-colors" />
                        <p className="text-slate-400 text-sm font-semibold">{company.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
