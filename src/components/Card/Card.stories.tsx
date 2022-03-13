import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
CardComponent.args = {
  heading: 'Mens Black sneakers at low prices, Hurry up!',
  subHeading:
    'Sneakers are the best, they are the best. Buy them soon till the stock lasts',
  onSubmit: () => {},
  tag: '50% Off',
};

export const withoutTag = Template.bind({});
withoutTag.args = {
  heading: 'Mens Black sneakers at low prices, Hurry up buy now!',
  subHeading:
    'Sneakers are the best, they are the best. Buy them soon till the stock lasts',
  onSubmit: () => {},
};
