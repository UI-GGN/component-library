import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomCard from './CustomCard';
import { Button } from '..';

export default {
  title: 'CustomCard',
  component: CustomCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CustomCard>;

const Template: ComponentStory<typeof CustomCard> = (args) => (
  <CustomCard {...args} />
);

export const customRender = Template.bind({});
customRender.args = {
  heading: 'Mens Black sneakers at low prices, Hurry up buy now!',
  subHeading:
    'Sneakers are the best, they are the best. Buy them soon till the stock lasts',
  onSubmit: () => {},
  render: () => <Button variant='outlined' label='hello'></Button>,
};
