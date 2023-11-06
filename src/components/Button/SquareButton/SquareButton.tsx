import { ButtonProps, getButtonClassName } from '../Button';

export default function SquareButton({
  children,
  onClick,
  size = 'large',
  variant = 'filled',
  fullWidth = false,
  disabled = false,
  id,
}: ButtonProps) {
  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={`
      rounded-lg 
      disabled:bg-gray-20 
      disabled:border-gray-20 
      disabled:text-gray-0 
      ${getButtonClassName(size, variant, fullWidth)}`}
    >
      {children}
    </button>
  );
}
