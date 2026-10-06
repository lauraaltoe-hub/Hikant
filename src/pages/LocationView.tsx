import React from 'react';
import { HiKantText } from '../components/HiKantTypography';

export const LocationView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Location
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-serif leading-relaxed">
          Padre Sergio’s former monastery in Borgata Superiore, Marmora
        </p>
      </header>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          <HiKantText /> takes place in Borgata Superiore, Marmora, in the upper Maira Valley, in a former Benedictine monastery. Set at around 1,580 meters above sea level, the monastery was home to the remarkable library created by Padre Sergio De Piccoli, with a collection of around 62,500 volumes. Some of the volumes are still preserved in the building.
        </p>

        <p>
          Padre Sergio was known not only for collecting books, but also for welcoming people. Today, the spaces are cared for by the association <em>Luoghi di Passaggio</em>, which continues this spirit of hospitality and has developed the former monastery as a place for reading, art, reflection, and exchange.
        </p>

        <p>
          Surrounded by the mountains and hiking trails of the Maira Valley, Padre Sergio’s former Monastery provides an ideal setting for <HiKantText />. Its indoor and outdoor spaces offer different places for reading, discussion, and informal conversation with exceptional views of the surrounding landscape.
        </p>
      </div>
    </article>
  );
};
