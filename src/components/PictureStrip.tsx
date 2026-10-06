import React, { useState, useEffect } from 'react';
import { PageData, PagePicture } from '../data/retreatData';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface PictureStripProps {
  page: PageData;
}

export const PictureStrip: React.FC<PictureStripProps> = ({ page }) => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Keyboard navigation for enlarged modal
  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % page.pictures.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev - 1 + page.pictures.length) % page.pictures.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, page.pictures.length]);

  const activePicture: PagePicture | null =
    activeModalIndex !== null ? page.pictures[activeModalIndex] : null;

  return (
    <>
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Horizontal strip with 4 pictures strictly in one single line */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 w-full">
            {page.pictures.map((pic, idx) => (
              <div
                key={`${page.id}-${idx}`}
                onClick={() => setActiveModalIndex(idx)}
                className="group relative w-full h-24 sm:h-36 md:h-48 lg:h-56 overflow-hidden bg-gray-100 cursor-zoom-in select-none"
                title="Click or hover to view bigger"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalIndex(idx);
                  }
                }}
                aria-label={`View picture ${idx + 1} of 4: ${pic.alt}`}
              >
                {/* Image with mouse-over smooth zoom effect */}
                <img
                  src={pic.src}
                  alt={pic.alt}
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-out group-hover:scale-110"
                  loading="eager"
                />

                {/* Mouse-over indicator overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                  <div className="bg-black/60 text-white rounded-full p-2 backdrop-blur-xs">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enlarged Modal / Lightbox when clicked */}
      {activeModalIndex !== null && activePicture && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged retreat photograph"
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking image content
          >
            {/* Top Close Bar */}
            <div className="w-full flex items-center justify-between text-white/90 pb-2 px-1">
              <span className="text-xs uppercase tracking-wider text-white/70">
                {page.name} · Picture {activeModalIndex + 1} of {page.pictures.length}
              </span>
              <button
                onClick={() => setActiveModalIndex(null)}
                className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close enlarged picture"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Enlarged Image display */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden bg-black/40">
              <img
                src={activePicture.src}
                alt={activePicture.alt}
                className="max-h-[75vh] max-w-full w-auto h-auto object-contain shadow-2xl transition-all duration-200"
              />

              {/* Previous picture arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex(
                    (activeModalIndex - 1 + page.pictures.length) % page.pictures.length
                  );
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors focus:outline-none"
                aria-label="Previous picture"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next picture arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex((activeModalIndex + 1) % page.pictures.length);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors focus:outline-none"
                aria-label="Next picture"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption underneath enlarged picture */}
            {activePicture.caption && (
              <p className="text-sm text-white/80 font-serif pt-3 text-center px-4 max-w-2xl">
                {activePicture.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
