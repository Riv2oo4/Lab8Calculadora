import React from 'react';
import { render } from '@testing-library/react';
import Display from './Componentes/Display';
import '@testing-library/jest-dom/extend-expect';

test('muestra el valor correctamente', () => {
  const { getByDisplayValue } = render(<Display value="123456789" />);
  expect(getByDisplayValue('123456789')).toBeInTheDocument();
});

test('muestra ERROR correctamente', () => {
  const { getByDisplayValue } = render(<Display value="ERROR" />);
  expect(getByDisplayValue('ERROR')).toBeInTheDocument();
});
