import React from 'react';
import './Card.css';
export interface CardProps {
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
export default Card;
