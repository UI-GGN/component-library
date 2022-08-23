import React from 'react';

interface TypographyProps {
    /**
     * How large should the button be?
     */
    textType?: 'small' | 'medium' | 'large' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Button contents
     */
    text: string;
}
declare const Typography: ({ textType, text }: TypographyProps) => JSX.Element;

interface ButtonProps {
    /**
     * How the button should look
     */
    variant?: "outlined" | "contained" | "text";
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "sm" | "md" | "lg";
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

interface CardProps {
    /**
     * How the heading should look
     */
    heading: string;
    /**
     * How the subheading should look
     */
    subHeading: string;
    /**
     * Optional tag
     */
    tag?: string;
    /**
     * click handler
     */
    onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Card: ({ heading, subHeading, onSubmit, tag }: CardProps) => JSX.Element;

interface CustomCardProps {
    /**
     * How the heading should look
     */
    heading: string;
    /**
     * How the subheading should look
     */
    subHeading: string;
    /**
     * Optional tag
     */
    tag?: string;
    /**
     * click handler
     */
    onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    render: () => JSX.Element;
}
declare const CustomCard: ({ heading, subHeading, onSubmit, render, }: CustomCardProps) => JSX.Element;

export { Button, Card, CustomCard, Typography };
