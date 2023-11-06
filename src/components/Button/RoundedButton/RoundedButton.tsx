import { ButtonProps, getButtonClassName } from '../Button';

export default function RoundedButton({
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
      rounded-full 
      disabled:bg-gray-0 
      disabled:border-gray-20 
      disabled:text-gray-50 
      ${getButtonClassName(size, variant, fullWidth)}`}
    >
      {children}
    </button>
  );
}
