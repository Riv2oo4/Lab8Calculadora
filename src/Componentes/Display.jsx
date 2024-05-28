import React from 'react';

const Display = ({ value }) => {
  return (
    <input type="text" value={value} disabled className="calculator-display" />
  );
};

export default Display;
