import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * How the button should look
   */
  variant?: 'outlined' | 'contained' | 'text';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  backgroundColor,
  size = 'md',
  variant = 'contained',
  onClick,
  label,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['btn', `btn--${size},`, `btn--${variant}`].join(' ')}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      Welcome, {label}
    </button>
  );
};

export default Button;
