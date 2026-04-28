import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <About />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}
