import React from 'react';
import './App.css';
import Display from './components/calculator/Display';
import Numbers from './components/calculator/Numbers';
import Operations from './components/calculator/Operations';
import Equals from './components/calculator/Equals';

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="palette">
        <Display />
        <Operations />
        <Numbers />
        <Equals />
      </div>
    </div>
  );
};

export default App;
