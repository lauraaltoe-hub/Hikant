import React from 'react';
import { HiKantText } from '../components/HiKantTypography';

export const PracticalView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-10 text-gray-900">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Practical
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-serif leading-relaxed">
          Costs, travel and equipment for the hike
        </p>
      </header>

      {/* Costs and practical information */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-normal text-black">
          Costs and Practical Information
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          The cost of participating in <HiKantText /> is deliberately kept as low as possible. Participants should expect the following expenses:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800">
          <li>€15 membership fee for the association Luoghi di Passaggio.</li>
          <li>€15 per night for accommodation at Padre Sergio’s former Monastery. For three nights, this amounts to €45.</li>
          <li>A contribution to the shared travel costs from Turin to Marmora. Transport to Marmora will be organized collectively from Turin.</li>
          <li>A contribution to food expenses, since meals will be bought and prepared together by the group.</li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800 pt-2">
          Participants are responsible for arranging and covering for their journey to Turin.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          More precise information about the meeting point in Turin, transport arrangements, and the estimated food contribution will be provided once the group of participants has been finalized.
        </p>
      </section>

      {/* Equipment for the hike */}
      <section className="space-y-4 pt-4 border-t border-gray-200">
        <h2 className="text-2xl font-serif font-normal text-black">
          Equipment for the Hike
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          For the planned hike, you should have the following equipment:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800">
          <li>
            <strong>Hiking shoes or boots</strong> with a good, non-slip sole, preferably waterproof. Please avoid ordinary trainers.
          </li>
          <li>
            <strong>A daypack</strong> in which you can comfortably carry everything you need.
          </li>
          <li>
            <strong>A water bottle</strong> with enough water for several hours of hiking.
          </li>
          <li>
            <strong>Comfortable hiking clothes</strong>, ideally made of breathable, quick-drying technical materials. We suggest following the so-called onion principle and bringing several layers of clothing so that you can adjust to changes in temperature.
          </li>
          <li>
            <strong>A waterproof and windproof jacket</strong>, even if the weather forecast looks good. Conditions in the mountains can change quickly.
          </li>
          <li>
            <strong>Sunglasses, sunscreen, and a sun hat.</strong>
          </li>
          <li>
            <strong>A spare T-shirt, underwear, and socks</strong>, particularly useful if you get wet or sweaty.
          </li>
        </ul>
      </section>
    </article>
  );
};
