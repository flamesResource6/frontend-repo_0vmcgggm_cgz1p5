import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} OAJ Institute. All rights reserved.</p>
        <div className="text-sm text-gray-600">Built with passion for learning.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
