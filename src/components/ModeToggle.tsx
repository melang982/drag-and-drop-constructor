import React from 'react';
import IconEye from './icons/IconEye';
import IconSelector from './icons/IconSelector';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setRuntime } from '../features/mainSlice';

interface ModeToggleProps {
  margin?: string;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ margin }) => {
  const dispatch = useDispatch();
  const isRuntime = useSelector((state: RootState) => state.main.isRuntime);
  return (
    <div className="toggle" style={{ margin: margin }}>
      <div
        className={'toggle__mode' + (isRuntime ? ' toggle__mode_active' : '')}
        onClick={() => dispatch(setRuntime(true))}
      >
        <IconEye />
        Runtime
      </div>
      <div
        className={'toggle__mode' + (!isRuntime ? ' toggle__mode_active' : '')}
        onClick={() => dispatch(setRuntime(false))}
      >
        <IconSelector />
        Constructor
      </div>
    </div>
  );
};

export default ModeToggle;
