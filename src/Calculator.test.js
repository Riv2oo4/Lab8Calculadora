import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Componentes/Calculator';
import '@testing-library/jest-dom/extend-expect';

test('realiza correctamente la suma', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('='));
  expect(getByDisplayValue('8')).toBeInTheDocument();
});

test('realiza correctamente la división', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByDisplayValue('4')).toBeInTheDocument();
});
test('realiza correctamente la división de 40 entre 10', () => {
    const { getByText,getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(getByDisplayValue('4')).toBeInTheDocument();
});
  

