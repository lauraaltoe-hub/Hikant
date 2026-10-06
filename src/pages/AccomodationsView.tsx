import React from 'react';

export const AccomodationsView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Accomodations
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-serif leading-relaxed">
          Accomodation and meals at the monastery
        </p>
      </header>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          Accommodation will be simple and communal, in a typical mountain setting similar to a mountain hut. Graduate students and postdocs will stay at Padre Sergio’s former Monastery, where the association <em>Luoghi di Passaggio</em> has restored four shared rooms with nine beds in total:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Three double rooms</li>
          <li>One triple room</li>
          <li>Participants will also share two bathrooms</li>
        </ul>

        <p>
          Meals will also take place at the Monastery and will be prepared together by the participants.
        </p>
      </div>
    </article>
  );
};
