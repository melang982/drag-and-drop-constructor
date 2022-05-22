interface DividerProps {
  order: number;
}

const Divider = ({ order }: DividerProps) => {
  return <div className="divider" style={{ order: order }} onDragOver={(e) => e.preventDefault()}></div>;
};

export default Divider;
