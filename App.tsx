
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <FAQ />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
