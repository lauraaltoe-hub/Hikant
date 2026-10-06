import React from 'react';
import { HiKantText } from '../components/HiKantTypography';

export const DownloadView: React.FC = () => {
  const downloadTextFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadOverview = () => {
    const content = `HIKANT - PHILOSOPHICAL RETREAT IN THE ALPS
Dates: September 6 to September 9, 2027
Location: Borgata Superiore, Marmora, Val Maira (CN), Italy

HIKANT aims to bring together scholars working on Kant for reading, discussing, and thinking about Kant together in the mountains of the beautiful Maira Valley.

Over a few days, we will read and discuss a text by Kant in an informal setting, combining philosophical conversation with time outdoors, shared meals, and hikes in the surrounding mountains.

The aim is not only to study Kant, but also to experiment with a collaborative and non-competitive way of doing philosophy. The point will not be to impress others with your latest paper, but to think through ideas together, test them in conversation, and help one another make them clearer.

HIKANT is intended primarily for graduate students and early postdocs, with the hope of building a community of scholars.

LOCATION
Borgata Superiore, Marmora, in the upper Maira Valley, in a former Benedictine monastery set at around 1,580 meters above sea level. Home to Padre Sergio De Piccoli's library (~62,500 volumes), cared for by the association Luoghi di Passaggio.

ACCOMODATION & MEALS
Simple and communal mountain setting in the monastery: four shared rooms with nine beds in total (three double rooms and one triple room). Two shared bathrooms. Meals prepared together by participants.

PROGRAM (2027 EDITION)
- September 6: Meeting in Turin and travel to Marmora.
- September 7-8: HIKANT core activities, including reading and discussion sessions and one hike.
- September 9: Travel back to Turin.

COSTS
- €15 membership fee for the association Luoghi di Passaggio.
- €15 per night for accommodation (3 nights = €45).
- Contribution to shared travel costs from Turin to Marmora.
- Contribution to food expenses (shared grocery purchase).

CONTACT
Laura Altoè (laura.altoe@gmail.com)
`;
    downloadTextFile('HIKANT_Retreat_Overview.txt', content);
  };

  const handleDownloadGear = () => {
    const content = `EQUIPMENT FOR THE HIKE - HIKANT 2027

For the planned hike, you should have the following equipment:

• Hiking shoes or boots with a good, non-slip sole, preferably waterproof. Please avoid ordinary trainers.
• A daypack in which you can comfortably carry everything you need.
• A water bottle with enough water for several hours of hiking.
• Comfortable hiking clothes, ideally made of breathable, quick-drying technical materials (onion principle / layers).
• A waterproof and windproof jacket, even if the weather forecast looks good. Conditions in the mountains can change quickly.
• Sunglasses, sunscreen, and a sun hat.
• A spare T-shirt, underwear, and socks, particularly useful if you get wet or sweaty.
`;
    downloadTextFile('HIKANT_Equipment_Checklist.txt', content);
  };

  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Download
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-serif leading-relaxed">
          Retreat information and materials
        </p>
      </header>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          You can download the summary materials and practical checklists for the retreat below:
        </p>

        <ul className="space-y-4 pt-2">
          <li className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-200 pb-3">
            <div>
              <span className="font-medium text-black">
                <HiKantText /> 2027 Retreat Description & Program
              </span>
              <p className="text-sm text-gray-600">Complete summary document (text file)</p>
            </div>
            <button
              onClick={handleDownloadOverview}
              className="text-[#344E20] hover:text-black underline font-medium text-sm self-start sm:self-auto cursor-pointer"
            >
              Download
            </button>
          </li>

          <li className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-200 pb-3">
            <div>
              <span className="font-medium text-black">Equipment Checklist for the Hike</span>
              <p className="text-sm text-gray-600">List of required hiking gear and layers (text file)</p>
            </div>
            <button
              onClick={handleDownloadGear}
              className="text-[#344E20] hover:text-black underline font-medium text-sm self-start sm:self-auto cursor-pointer"
            >
              Download
            </button>
          </li>
        </ul>

        <p className="text-sm text-gray-600 pt-4">
          Note: No registration page or form is needed. For any questions, please contact the organizers directly via email.
        </p>
      </div>
    </article>
  );
};
