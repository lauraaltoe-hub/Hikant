import React, { useState, useEffect } from 'react';
import { TopHeader } from './components/TopHeader';
import { NavBar } from './components/NavBar';
import { PictureStrip } from './components/PictureStrip';
import { Footer } from './components/Footer';
import { RETREAT_PAGES, PageData } from './data/retreatData';

import { HomeView } from './pages/HomeView';
import { ValMairaView } from './pages/ValMairaView';
import { LocationView } from './pages/LocationView';
import { AccomodationsView } from './pages/AccomodationsView';
import { ProgramView } from './pages/ProgramView';
import { PracticalView } from './pages/PracticalView';
import { DownloadView } from './pages/DownloadView';

export default function App() {
  const [activePageId, setActivePageId] = useState<string>('home');

  const currentPage: PageData =
    RETREAT_PAGES.find((p) => p.id === activePageId) || RETREAT_PAGES[0];

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.replace('#', '');
      // Handle backward compatibility if someone visits #setting
      if (hash === 'setting') hash = 'location';

      if (RETREAT_PAGES.some((p) => p.id === hash)) {
        setActivePageId(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPage = (id: string) => {
    setActivePageId(id);
    window.location.hash = id;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans antialiased">
      {/* 1. Logo on top left side */}
      <TopHeader onLogoClick={() => handleSelectPage('home')} />

      {/* 2. Underneath: bar with pages name always visible, placed one next to the other */}
      <NavBar activePageId={activePageId} onSelectPage={handleSelectPage} />

      {/* 3. Under the pages bar: strip containing 4 pictures, different on every page, enlargeable on click/hover */}
      <PictureStrip page={currentPage} />

      {/* 4. Under the pictures: clean, simple text with no highlights or boxes */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {activePageId === 'home' && <HomeView />}
        {activePageId === 'val-maira' && <ValMairaView />}
        {activePageId === 'location' && <LocationView />}
        {activePageId === 'accomodations' && <AccomodationsView />}
        {activePageId === 'program' && <ProgramView />}
        {activePageId === 'practical' && <PracticalView />}
        {activePageId === 'download' && <DownloadView />}
      </main>

      {/* 5. Footer: stripe of sponsor logos (no text) and space for contacts */}
      <Footer />
    </div>
  );
}
