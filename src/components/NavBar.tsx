import React from 'react';
import { RETREAT_PAGES, PageData } from '../data/retreatData';

interface NavBarProps {
  activePageId: string;
  onSelectPage: (id: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activePageId, onSelectPage }) => {
  return (
    <nav
      aria-label="Pages Navigation"
      className="sticky top-0 z-40 w-full bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bar with the pages name always visible, centered symmetrically under the logo */}
        <div className="flex items-center justify-start sm:justify-center space-x-6 sm:space-x-8 overflow-x-auto py-3 no-scrollbar">
          {RETREAT_PAGES.map((page: PageData) => {
            const isActive = activePageId === page.id;
            return (
              <button
                key={page.id}
                onClick={() => {
                  onSelectPage(page.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`shrink-0 text-sm sm:text-base tracking-wide transition-colors pb-1 border-b-2 font-medium cursor-pointer ${
                  isActive
                    ? 'text-[#2D4523] border-[#48632C]'
                    : 'text-gray-600 hover:text-black border-transparent'
                }`}
              >
                {page.navTitle}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
