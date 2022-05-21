import React from 'react';

interface Props {
  order: number;
}

const Divider: React.FC<Props> = ({ order }) => {
  return (
    <div className="divider" style={{ order: order }} onDragOver={(e) => e.preventDefault()}></div>
  );
};

export default Divider;
