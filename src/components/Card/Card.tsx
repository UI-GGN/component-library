import React from 'react';

export interface CardProps {
  variant: 'outlined' | 'elevated';
  backgroundColor?: string;
  children: React.ReactNode;
}

const Card = ({ variant, backgroundColor, children }: CardProps) => (
  <div
    className={`card--${variant}`}
    style={backgroundColor ? { backgroundColor } : {}}
  >
    {children}
  </div>
);

export default Card;
