
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FraudChecker from './components/FraudChecker';
import Dashboard from './components/Dashboard';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onGetStarted={() => setActiveTab('demo')} />
            <Features />
          </>
        );
      case 'about':
        return <About />;
      case 'features':
        return <Features />;
      case 'demo':
        return <FraudChecker />;
      case 'dashboard':
        return <Dashboard />;
      case 'tech':
        return <TechStack />;
      default:
        return <Hero onGetStarted={() => setActiveTab('demo')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
