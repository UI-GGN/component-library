import React from 'react';
import { Typography, Button } from '../../components';
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

const Card = ({ heading, subHeading, onSubmit, tag }: CardProps) => {
  return (
    <div className='card flex flex-column '>
      <div className='card--content'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <Typography text={heading} textType='h6'></Typography>
            {tag && <span className='card--content__tag'>{tag}</span>}
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

export default Card;
