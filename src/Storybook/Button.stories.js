import React from 'react';
import Button from '../Componentes/Button';

export default {
  title: 'Calculator/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const NumberButton = Template.bind({});
NumberButton.args = {
  id: '1',
  label: '1',
  onClick: () => {},
};

export const OperatorButton = Template.bind({});
OperatorButton.args = {
  id: '+',
  label: '+',
  onClick: () => {},
};
