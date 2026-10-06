import React from 'react';

interface HiKantLogoProps {
  className?: string;
  height?: number | string;
}

export const HiKantLogo: React.FC<HiKantLogoProps> = ({
  className = '',
  height = 92,
}) => {
  return (
    <div className={`inline-flex items-center justify-center bg-white ${className}`}>
      {/* 
        Using tight viewBox (140 180 1700 370) focused directly on the artwork bounds.
        This eliminates the 55% empty white margins from the raw 1983x793 artboard,
        making the mountain and typography substantially larger, sharper, and immediately visible.
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="140 180 1700 370"
        style={{ height, width: 'auto' }}
        className="block select-none max-w-full"
        aria-label="HiKANT Logo"
        role="img"
      >
        <title>HIKANT — logo vettoriale</title>
        <desc>Tracciamento del logo originale, con dimensioni e proporzioni originali. Forme vettoriali senza font o immagini incorporate.</desc>
        <rect x="140" y="180" width="1700" height="370" fill="#ffffff" />
        <path
          id="lettere-grigie"
          fill="#4b4f4f"
          fillRule="evenodd"
          d="M 148.50,365.69 L 192.50,365.63 L 194.25,366.50 L 194.22,428.50 L 195.50,429.81 L 318.18,429.50 L 318.97,428.50 L 318.86,366.50 L 320.50,365.60 L 365.50,365.68 L 365.53,540.50 L 319.48,540.50 L 318.50,468.06 L 195.50,467.77 L 194.18,469.50 L 194.28,539.50 L 192.50,540.72 L 148.50,540.72 L 147.44,539.50 L 147.49,383.50 L 147.65,366.50 Z M 395.50,365.72 L 440.50,365.58 L 441.22,366.50 L 441.20,539.50 L 440.50,540.72 L 395.50,540.71 L 394.90,539.50 Z"
        />
        <path
          id="triangoli-verdi"
          fill="#476c2c"
          fillRule="evenodd"
          d="M 471.50,365.48 L 561.50,365.59 L 563.76,366.50 L 471.50,438.26 L 470.35,437.50 L 470.35,429.50 L 470.42,367.50 Z M 471.50,451.21 L 563.69,539.50 L 562.50,540.67 L 471.50,540.76 L 470.35,539.50 L 470.32,467.50 L 470.36,452.50 Z"
        />
        <path
          id="montagne"
          fill="#7c947a"
          fillRule="evenodd"
          d="M 851.50,191.19 L 1064.50,360.28 L 1180.50,296.55 L 1354.50,422.72 L 1357.50,422.69 L 1441.50,398.82 L 1546.50,454.81 L 1679.50,498.52 L 1774.50,525.84 L 1827.50,539.45 L 1828.24,540.50 L 1195.66,540.50 L 1195.28,407.50 L 1257.37,406.50 L 1257.70,369.50 L 1256.50,367.98 L 1089.39,368.50 L 1089.50,406.56 L 1151.02,407.50 L 1151.22,533.50 L 1150.50,540.53 L 1063.50,540.42 L 1063.06,369.50 L 1062.50,367.96 L 1061.50,367.94 L 1019.76,368.50 L 1019.50,478.94 L 899.50,367.84 L 897.50,367.16 L 862.38,367.50 L 862.00,539.50 L 860.50,540.73 L 843.50,540.65 L 841.88,539.50 L 748.31,367.50 L 700.50,367.20 L 694.30,376.50 L 608.58,526.50 L 605.50,531.45 L 604.50,531.15 L 511.03,442.50 L 607.50,368.33 L 669.50,322.19 L 762.50,254.22 Z M 722.50,406.96 L 723.75,407.50 L 728.88,416.50 L 753.40,461.50 L 752.50,462.17 L 691.50,462.03 Z M 906.50,428.53 L 1021.40,539.50 L 1021.23,540.50 L 906.17,540.50 Z M 672.50,497.86 L 771.50,498.00 L 793.54,540.50 L 649.50,540.70 L 648.62,539.50 L 649.13,538.50 Z"
        />
      </svg>
    </div>
  );
};
