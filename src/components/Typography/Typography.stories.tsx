import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  text: 'This is Heading 1',
  textType: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  text: 'This is Heading 2',
  textType: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  text: 'This is Heading 3',
  textType: 'h3',
};
