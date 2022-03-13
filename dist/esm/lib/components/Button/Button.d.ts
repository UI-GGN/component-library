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
declare const Button: ({ backgroundColor, size, variant, onClick, label, }: ButtonProps) => JSX.Element;
export default Button;
