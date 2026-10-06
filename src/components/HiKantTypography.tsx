import React from 'react';

interface HiKantTextProps {
  className?: string;
}

export const HiKantText: React.FC<HiKantTextProps> = ({ className = '' }) => {
  return (
    <span
      className={`inline-flex items-baseline tracking-normal select-none font-serif ${className}`}
    >
      <span className="uppercase text-[0.88em] tracking-wider font-normal">hi</span>
      <span className="text-[1.16em] font-medium leading-none mx-[0.5px]">K</span>
      <span className="uppercase text-[0.88em] tracking-wider font-normal">ant</span>
    </span>
  );
};
