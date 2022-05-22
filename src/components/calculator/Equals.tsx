import Button from '../Button';
import { useDispatch } from 'react-redux';
import { pressEquals } from '../../features/calculatorSlice';

const Equals = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(pressEquals())} style={{ height: '64px' }} variant="contained">
      =
    </Button>
  );
};

export default Equals;
