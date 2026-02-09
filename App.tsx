
import React, { useState, useEffect } from 'react';
import { UserProfile } from './types';
import Layout from './components/Layout';
import Onboarding from './components/Onboarding';
import HoroscopeView from './components/HoroscopeView';
import NatalChartView from './components/NatalChartView';
import OracleChat from './components/OracleChat';
import CompatibilityMatch from './components/CompatibilityMatch';

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState('horoscope');

  useEffect(() => {
    const saved = localStorage.getItem('celestial_profile_vedic');
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleOnboarding = (data: UserProfile) => {
    setProfile(data);
    localStorage.setItem('celestial_profile_vedic', JSON.stringify(data));
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Onboarding onComplete={handleOnboarding} />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'horoscope':
        return <HoroscopeView sign={profile.rashi!} />;
      case 'chart':
        return <NatalChartView profile={profile} />;
      case 'oracle':
        return <OracleChat profile={profile} />;
      case 'compatibility':
        return <CompatibilityMatch userSign={profile.rashi!} />;
      default:
        return <HoroscopeView sign={profile.rashi!} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="mt-4">
        <div className="mb-6 px-4 py-2 glass-panel rounded-xl inline-flex items-center gap-4 border-orange-500/30">
          <span className="text-orange-500 font-bold text-sm">आपका वैदिक विवरण:</span>
          <span className="text-stone-200 font-bold text-sm">राशि: {profile.rashi} | लग्न: {profile.lagna}</span>
          <button 
            onClick={() => {
              localStorage.removeItem('celestial_profile_vedic');
              setProfile(null);
            }}
            className="text-[10px] text-stone-500 hover:text-orange-400 uppercase font-bold ml-4 underline"
          >
            बदलें
          </button>
        </div>
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;