import React from 'react';
import { HiKantText } from '../components/HiKantTypography';

export const HomeView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="pb-1">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-wide inline-flex items-baseline">
          <HiKantText />
        </h1>
      </header>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          <HiKantText /> aims to bring together scholars working on Kant for reading, discussing, and thinking about Kant together in the mountains of the beautiful Maira Valley.
        </p>

        <p>
          Over a few days, we will read and discuss a text by Kant in an informal setting, combining philosophical conversation with time outdoors, shared meals, and hikes in the surrounding mountains.
        </p>

        <p>
          The aim is not only to study Kant, but also to experiment with a collaborative and non-competitive way of doing philosophy. The point will not be to impress others with your latest paper, but to think through ideas together, test them in conversation, and help one another make them clearer.
        </p>

        <p>
          <HiKantText /> is intended primarily for graduate students and early postdocs, with the hope of building a community of scholars. The goal is to leave not only with new ideas about Kant, but also with new intellectual connections and new friendships that will last well beyond the event.
        </p>
      </div>
    </article>
  );
};
