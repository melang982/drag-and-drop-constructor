import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
  variant?: string;
}

const Button: React.FC<Props> = ({ children, onClick, style, variant }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={variant === 'contained' ? 'btn_contained' : 'btn_outlined'}
    >
      {children}
    </button>
  );
};

export default Button;
