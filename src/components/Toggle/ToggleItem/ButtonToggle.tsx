import { ToggleProps, getButtonToggleClassName } from '../Toggle';

export default function ButtonToggle({
  children,
  size = 'large',
  fullWidth = false,
  onClick,
  isActive = false,
  id,
}: ToggleProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`
        rounded-lg 
        border 
        ${getButtonToggleClassName(size, fullWidth, isActive)}
      `}
    >
      {children}
    </button>
  );
}
