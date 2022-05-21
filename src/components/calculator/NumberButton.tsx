import React from 'react';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { pressNumber } from '../../features/calculatorSlice';

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const NumberButton: React.FC<Props> = ({ children, style }) => {
  const dispatch = useDispatch();
  return (
    <Button style={style} onClick={() => dispatch(pressNumber(children))}>
      {children}
    </Button>
  );
};

export default NumberButton;
