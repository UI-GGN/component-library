import React from 'react';
import { Typography, Button } from '..';
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

const CustomCard = ({
  heading,
  subHeading,
  onSubmit,
  render = () => <></>,
}: CustomCardProps) => {
  return (
    <div className='card flex flex-column '>
      <div className='card--content'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <Typography text={heading} textType='h6'></Typography>
            {render && render()}
          </div>
          <Typography text={subHeading} textType='large'></Typography>
          <img
            style={{ maxWidth: '100%', height: 'auto' }}
            src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
            alt='sneakers'
          ></img>
        </div>
      </div>

      <div className='card-cta'>
        <Button onClick={onSubmit} label='Buy'></Button>
        <Button onClick={onSubmit} label='Add to cart'></Button>
      </div>
    </div>
  );
};

export default CustomCard;
