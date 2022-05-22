import Button from '../Button';
import { useDispatch } from 'react-redux';
import { pressNumber } from '../../features/calculatorSlice';

interface NumberButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const NumberButton = ({ children, style }: NumberButtonProps) => {
  const dispatch = useDispatch();
  return (
    <Button style={style} onClick={() => dispatch(pressNumber(children))}>
      {children}
    </Button>
  );
};

export default NumberButton;
