import React from 'react';
import { HiKantText } from '../components/HiKantTypography';

export const ProgramView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Program
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-serif leading-relaxed">
          Program of the 2027 Edition
        </p>
      </header>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          The 2027 edition will take place from <strong>September 6 to September 9</strong>, with the following structure:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-800">
          <li>
            <strong>September 6:</strong> Meeting in Turin and travel to Marmora.
          </li>
          <li>
            <strong>September 7–8:</strong> <HiKantText /> core activities, including reading and discussion sessions and one hike.
          </li>
          <li>
            <strong>September 9:</strong> Travel back to Turin.
          </li>
        </ul>

        <p className="pt-2 text-gray-700">
          More information about the detailed schedule, meeting point in Turin, transport arrangements, and hiking plans will be provided closer to the event.
        </p>
      </div>
    </article>
  );
};
