import React from 'react';
import NumberButton from './NumberButton';

const Numbers: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 72px)',
        gridGap: '8px'
      }}
    >
      <NumberButton>7</NumberButton>
      <NumberButton>8</NumberButton>
      <NumberButton>9</NumberButton>

      <NumberButton>4</NumberButton>
      <NumberButton>5</NumberButton>
      <NumberButton>6</NumberButton>

      <NumberButton>1</NumberButton>
      <NumberButton>2</NumberButton>
      <NumberButton>3</NumberButton>

      <NumberButton style={{ gridColumn: '1/3' }}>0</NumberButton>
      <NumberButton>,</NumberButton>
    </div>
  );
};

export default Numbers;
