const Button = ({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {Icon && <Icon size={18} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;