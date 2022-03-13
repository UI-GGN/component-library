import React from 'react';
import './CustomCard.css';
export interface CustomCardProps {
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
export default CustomCard;
