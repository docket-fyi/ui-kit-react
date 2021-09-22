import React, { FC } from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const defaultNoParams: FC = () => <Button>default button</Button>;

export const primary: FC = () => (
  <Button appearance="primary">primary button</Button>
);

export const disabled: FC = () => (
  <Button appearance="primary" disabled>
    disabled button
  </Button>
);
