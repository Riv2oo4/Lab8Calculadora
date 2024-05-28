import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Componentes/Button';
import '@testing-library/jest-dom/extend-expect';



test('llama onClick cuando se hace click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="1" onClick={handleClick} />);
  fireEvent.click(getByText('1'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('se muestra correctamente con el texto proporcionado', () => {
  const { getByText } = render(<Button label="+" onClick={() => {}} />);
  expect(getByText('+')).toBeInTheDocument();
});
