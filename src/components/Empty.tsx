import React from 'react';
import IconAddComponent from './icons/IconAddComponent';

interface Props {
  canDrop?: boolean;
}

const Empty: React.FC<Props> = ({ canDrop }) => {
  return (
    <div className={'empty' + (canDrop ? ' empty-candrop' : '')}>
      <IconAddComponent />
      <strong>Перетащите сюда</strong> любой элемент
      <br />
      из левой панели
    </div>
  );
};

export default Empty;
