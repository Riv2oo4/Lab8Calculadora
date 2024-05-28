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
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByDisplayValue('3')).toBeInTheDocument();
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
test('realiza la limpia con el botón AC', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('7')); 
  fireEvent.click(getByText('AC')); 

  const displayValue = getByDisplayValue('');
  expect(displayValue).toBeInTheDocument(); 
});

test('realiza la eliminación del número con DEL', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('7')); 
  fireEvent.click(getByText('DEL')); 

  const displayValue = getByDisplayValue('');
  expect(displayValue).toBeInTheDocument(); 
});
test('realiza los clics de manera correcta', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('='));
  
  expect(getByDisplayValue('12')).toBeInTheDocument();
});

test('realiza cálculos de manera correcta', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  
  expect(getByDisplayValue('4')).toBeInTheDocument();
});

test('maneja el ERROR de manera correcta', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('='));
  
  expect(getByDisplayValue('ERROR')).toBeInTheDocument();
});

test('realiza updates', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('AC'));
  
  expect(getByDisplayValue('')).toBeInTheDocument();
});

test('se eliminan los elementos de manera correcta', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('DEL'));
  
  expect(getByDisplayValue('7')).toBeInTheDocument();
});

test('se cambia de signo de manera correcta', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('+/-'));
  
  expect(getByDisplayValue('-5')).toBeInTheDocument();
});
test('maneja los negativos de manera correcta', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('='));
  
  expect(getByDisplayValue('ERROR')).toBeInTheDocument();
});

  

