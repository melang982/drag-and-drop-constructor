interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
  variant?: string;
}

const Button = ({ children, onClick, style, variant }: ButtonProps) => {
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
