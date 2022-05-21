import React from 'react';
import './App.css';
import Display from './components/calculator/Display';
import Numbers from './components/calculator/Numbers';
import Operations from './components/calculator/Operations';
import Equals from './components/calculator/Equals';
import { RootState } from './app/store';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
  const isRuntime = useSelector((state: RootState) => state.main.isRuntime);
  const availableComponents = useSelector((state: RootState) => state.main.availableComponents);
  const selectedComponents = useSelector((state: RootState) => state.main.selectedComponents);

  const components = {
    display: Display,
    numbers: Numbers,
    operations: Operations,
    equals: Equals
  };

  const AvailableComponent = (name: string) => {
    const SpecificComponent = components[name as keyof typeof components];
    const isSelected = selectedComponents.find((x) => x === name);
    const className = 'paper disabled ' + (isSelected ? 'greyed-out' : '');
    return (
      <div key={name} draggable={!isSelected} className={className}>
        <SpecificComponent />
      </div>
    );
  };

  return (
    <div className="App">
      <div id="palette">
        {!isRuntime && availableComponents.map((name) => AvailableComponent(name))}
      </div>
    </div>
  );
};

export default App;
