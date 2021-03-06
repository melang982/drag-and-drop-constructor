import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const Display = () => {
  const value = useSelector((state: RootState) => state.calculator.displayedValue);
  return (
    <div className="display" style={value.toString().length > 9 ? { fontSize: '19px' } : {}}>
      {value}
    </div>
  );
};

export default Display;
