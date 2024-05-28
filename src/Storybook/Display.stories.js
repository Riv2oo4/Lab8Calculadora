import React from 'react';
import Display from '../Componentes/Display';

export default {
  title: 'Calculator/Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '123456789',
};

export const Error = Template.bind({});
Error.args = {
  value: 'ERROR',
};
