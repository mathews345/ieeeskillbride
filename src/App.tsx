import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Workshops from './components/Workshops';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Workshops />
      <Speakers />
      <Registration />
      <Gallery />
      <Sponsors />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
