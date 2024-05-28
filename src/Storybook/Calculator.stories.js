import React from 'react';
import Calculator from '../Componentes/Calculator';

export default {
  title: 'Calculator/Calculator',
  component: Calculator,
};

const Template = (args) => <Calculator {...args} />;

export const Default = Template.bind({});
Default.args = {};
