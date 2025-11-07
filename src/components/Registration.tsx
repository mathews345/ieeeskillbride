import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    workshops: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const workshops = [
    'Web Development',
    'IoT & Embedded Systems',
    'Machine Learning',
    'Cloud Computing & DevOps',
    'Cybersecurity',
    'Full Stack Development',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWorkshopToggle = (workshop: string) => {
    setFormData({
      ...formData,
      workshops: formData.workshops.includes(workshop)
        ? formData.workshops.filter((w) => w !== workshop)
        : [...formData.workshops, workshop],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        branch: '',
        workshops: [],
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-12 text-center">
            <div className="inline-block p-4 bg-cyan-500/20 rounded-full mb-6">
              <Check className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Registration Successful!</h3>
            <p className="text-slate-300 mb-2">Thank you for registering for Skill Bridge 2.0</p>
            <p className="text-slate-400 text-sm">A confirmation email has been sent to your registered email address.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Secure your spot at Skill Bridge 2.0</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label htmlFor="college" className="block text-sm font-semibold text-slate-300 mb-2">
                College/Institution *
              </label>
              <input
                type="text"
                id="college"
                name="college"
                required
                value={formData.college}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Your College Name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="year" className="block text-sm font-semibold text-slate-300 mb-2">
                Year of Study *
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="">Select Year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-semibold text-slate-300 mb-2">
                Branch/Department *
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                required
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Computer Science"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-300 mb-3">
              Select Workshops (Optional)
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {workshops.map((workshop) => (
                <button
                  key={workshop}
                  type="button"
                  onClick={() => handleWorkshopToggle(workshop)}
                  className={`px-4 py-3 rounded-lg border transition-all text-left ${
                    formData.workshops.includes(workshop)
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                      : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  {workshop}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Complete Registration'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
