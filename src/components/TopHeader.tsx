import React from 'react';
import { HiKantLogo } from './HiKantLogo';

interface TopHeaderProps {
  onLogoClick: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="w-full bg-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Prominent centered logo */}
        <button
          onClick={onLogoClick}
          className="focus:outline-none cursor-pointer inline-flex items-center justify-center transition-opacity hover:opacity-90"
          aria-label="HiKANT Home"
        >
          <HiKantLogo height={96} className="w-auto max-w-[90vw] sm:max-w-2xl" />
        </button>
      </div>
    </header>
  );
};
