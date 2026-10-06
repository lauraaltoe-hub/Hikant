import React from 'react';
import { RETREAT_INFO } from '../data/retreatData';
import { HiKantText } from './HiKantTypography';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16 sm:mt-24">
      {/* 1. Stripe with sponsor logos (no text, just logos) */}
      <div className="w-full border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center sm:justify-between flex-wrap gap-8 sm:gap-12 opacity-70">
            {/* Logo 1: Alpine mountain emblem */}
            <svg
              className="h-10 w-auto text-[#48632C]"
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Sponsor Logo 1"
            >
              <polygon points="10,35 25,12 40,35" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <polygon points="28,35 42,18 54,35" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <line x1="5" y1="35" x2="55" y2="35" stroke="currentColor" strokeWidth="2.5" />
            </svg>

            {/* Logo 2: Monastic book & seal emblem */}
            <svg
              className="h-10 w-auto text-[#718C73]"
              viewBox="0 0 50 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Sponsor Logo 2"
            >
              <path d="M25 8 C18 4, 8 6, 6 8 L6 32 C12 30, 20 29, 25 33 C30 29, 38 30, 44 32 L44 8 C42 6, 32 4, 25 8 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="25" y1="8" x2="25" y2="33" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Logo 3: Academic crest emblem */}
            <svg
              className="h-10 w-auto text-[#3E4244]"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Sponsor Logo 3"
            >
              <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="22" cy="22" r="13" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              <path d="M22 13 L25 19 L31 20 L27 24 L28 31 L22 27 L16 31 L17 24 L13 20 L19 19 Z" fill="currentColor" opacity="0.6" />
            </svg>

            {/* Logo 4: Cultural heritage emblem */}
            <svg
              className="h-10 w-auto text-[#718C73]"
              viewBox="0 0 50 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Sponsor Logo 4"
            >
              <rect x="8" y="10" width="34" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="25" cy="22" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="8" y1="22" x2="19" y2="22" stroke="currentColor" strokeWidth="1.5" />
              <line x1="31" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            {/* Logo 5: Philosophy colloquium geometric emblem */}
            <svg
              className="h-10 w-auto text-[#48632C]"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Sponsor Logo 5"
            >
              <polygon points="23,6 40,34 6,34" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="23" cy="22" r="4" fill="currentColor" />
            </svg>

            {/* Logo 6: Supporting patron placeholder emblem */}
            <svg
              className="h-10 w-auto text-[#3E4244]"
              viewBox="0 0 48 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Sponsor Logo 6"
            >
              <rect x="10" y="8" width="28" height="26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
              <circle cx="24" cy="21" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Space for the contacts (clean, simple, no boxes) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <p className="font-semibold text-black">
            Contacts & Information
          </p>
          <p>
            Email: <a href={`mailto:${RETREAT_INFO.contactEmail}`} className="text-[#344E20] underline hover:text-black">{RETREAT_INFO.contactEmail}</a>
          </p>
          <p>
            Location: {RETREAT_INFO.venue}, {RETREAT_INFO.location}
          </p>
          <p className="text-xs text-gray-500 pt-3 flex items-center justify-center gap-1.5 flex-wrap">
            <HiKantText />
            <span>— A 4-day philosophical retreat in the Alps · September 6–9, 2027</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
