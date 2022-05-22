import Button from '../Button';
import { useDispatch } from 'react-redux';
import { pressOperation } from '../../features/calculatorSlice';

const Operations = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button onClick={() => dispatch(pressOperation('/'))}>/</Button>
      <Button onClick={() => dispatch(pressOperation('x'))}>x</Button>
      <Button onClick={() => dispatch(pressOperation('-'))}>-</Button>
      <Button onClick={() => dispatch(pressOperation('+'))}>+</Button>
    </div>
  );
};

export default Operations;
