import './App.css';
import Display from './components/calculator/Display';
import Numbers from './components/calculator/Numbers';
import Operations from './components/calculator/Operations';
import Equals from './components/calculator/Equals';
import EmptyZone from './components/EmptyZone';
import Divider from './components/Divider';
import ModeToggle from './components/ModeToggle';
import { useState } from 'react';
import { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addComponent, removeComponent } from './features/mainSlice';

const App = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector((state: RootState) => state.main.isRuntime);
  const availableComponents = useSelector((state: RootState) => state.main.availableComponents);
  const selectedComponents = useSelector((state: RootState) => state.main.selectedComponents);
  const [canDrop, setCanDrop] = useState(0);
  const [dividerOrder, setDividerOrder] = useState(0);
  const [draggedType, setDraggedType] = useState('');

  const components = {
    display: Display,
    numbers: Numbers,
    operations: Operations,
    equals: Equals
  };

  function onDragStart(name: string) {
    setDraggedType(name); //not using e.dataTransfer because it's not available in onDragOver
  }

  function onDragEnter() {
    setCanDrop((prev) => prev + 1); //so that hover over child doesn't break drag
  }

  function onDragLeave() {
    setCanDrop((prev) => prev - 1);
  }

  function onDragOver(e: React.DragEvent) {
    //dragging over zone, determine where to place the component
    e.preventDefault();
    e.stopPropagation();

    if (draggedType === 'display') setDividerOrder(-1);
    else {
      let centers = Array.from(e.currentTarget.children).map(
        (x) => (x as HTMLElement).offsetTop + x.clientHeight / 2
      );

      let order = centers.length;
      let i = 0;
      for (const center of centers) {
        if (e.clientY < center) {
          order = Math.max(0, i - 1); //components other than Display can't be first
          break;
        }
        i++;
      }
      setDividerOrder(order);
    }
  }

  function onDrop() {
    dispatch(addComponent({ name: draggedType, index: dividerOrder + 1 }));
    setCanDrop(0);
  }

  function onClick(e: React.MouseEvent, name: string) {
    if (e.detail === 2) dispatch(removeComponent(name)); //delete on double click
  }

  function AvailableComponent(name: string) {
    const SpecificComponent = components[name as keyof typeof components];
    const isSelected = selectedComponents.find((x) => x === name);
    const className = 'paper disabled ' + (isSelected ? 'greyed-out' : '');
    return (
      <div key={name} draggable={!isSelected} onDragStart={() => onDragStart(name)} className={className}>
        <SpecificComponent />
      </div>
    );
  }

  function SelectedComponent(name: string, index: number) {
    const SpecificComponent = components[name as keyof typeof components];

    let className = 'result__wrapper';
    if (!isRuntime) {
      className += ' disabled';
      if (name === 'display') className += ' not-allowed';
    }
    return (
      <div
        key={name}
        style={{ order: index }}
        draggable={!isRuntime && name !== 'display'}
        className={className}
        onDragStart={() => onDragStart(name)}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onClick={isRuntime ? undefined : (e) => onClick(e, name)}
      >
        <SpecificComponent />
      </div>
    );
  }

  return (
    <div className="App">
      <div id="palette">{!isRuntime && availableComponents.map((name) => AvailableComponent(name))}</div>
      <div
        id="result"
        onDragEnter={onDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <ModeToggle margin="0 0 30px" />
        {selectedComponents.length === 0 && <EmptyZone canDrop={canDrop > 0} />}
        {selectedComponents.length > 0 && (
          <div className="result__container" onDragOver={onDragOver}>
            {selectedComponents.map((name, index) => SelectedComponent(name, index))}
            {canDrop > 0 && <Divider order={dividerOrder} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
