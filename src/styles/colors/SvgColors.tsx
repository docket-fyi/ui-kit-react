import React from 'react';
import '@/styles/colors/colors.scss';

const SvgColors: React.FC = () => (
  <>
    <linearGradient
      id="linear-gradient"
      x1="7.5"
      y1="2.48"
      x2="7.5"
      y2="13.52"
      gradientTransform="matrix(1, 0, 0, -1, 0, 14)"
    >
      <stop offset="0" stopColor="var(--color-gradient-1)" />
      <stop offset="1" stopColor="var(--color-gradient-2)" />
    </linearGradient>
  </>
);

export default SvgColors;
