import React from 'react';
import './typography.css';

export interface TypographyProps {
  /**
   * How large should the button be?
   */
  textType?:
    | 'small'
    | 'medium'
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  /**
   * Button contents
   */
  text: string;
}

const Typography = ({ textType = 'medium', text }: TypographyProps) => {
  return <span className={`text--${textType}`}>{text}</span>;
};

export default Typography;
