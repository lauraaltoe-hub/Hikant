import React from 'react';
import { ValMairaGoogleMap } from '../components/ValMairaGoogleMap';
import { HiKantText } from '../components/HiKantTypography';

export const ValMairaView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Val Maira
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-serif leading-relaxed">
          The valley and mountain setting
        </p>
      </header>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          <HiKantText /> takes place in Borgata Superiore, Marmora, in the upper Maira Valley in the Cottian Alps (Piedmont, Italy). Set at around 1,580 meters above sea level, the valley provides an extraordinary mountain environment of open horizons and silent alpine paths.
        </p>

        <p>
          Val Maira has remained untouched by mass commercial winter tourism and ski infrastructure, preserving its wild natural landscapes, centuries of traditional stone architecture, and quiet trails.
        </p>

        <p>
          Surrounded by the mountains and hiking trails of the Maira Valley, the area provides an ideal setting for <HiKantText />. The mountain air, walking paths, and expansive views offer a natural space for reading, sustained reflection, and informal philosophical discussion.
        </p>
      </div>

      {/* Integrated Google Maps on Earth View */}
      <ValMairaGoogleMap />
    </article>
  );
};
