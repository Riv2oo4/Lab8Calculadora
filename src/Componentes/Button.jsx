import React from 'react';

const Button = ({ id, label, onClick }) => {
  return (
    <button id={id} onClick={onClick} className="calculator-button">
      {label}
    </button>
  );
};

export default Button;
