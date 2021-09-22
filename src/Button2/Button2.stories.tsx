import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button2, ButtonProps } from './Button2';

export default {
  title: 'Example/Button2',
  component: Button2,
  argTypes: {
    primary: {
      control: 'boolean',
    },
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button2',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button2',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button2',
};
