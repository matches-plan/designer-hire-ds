import React from 'react';
import { getButtonClassName } from '../Button';

export default function GrayButton({
  id,
  disabled,
  onClick,
  children,
  fullWidth,
}: {
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={`
    rounded-lg 
    bg-gray-10 
    hover:bg-gray-20
    text-gray-90
    disabled:bg-gray-10 
    disabled:border-gray-20 
    disabled:text-gray-50 ${getButtonClassName('large', undefined, fullWidth)}`}
    >
      {children}
    </button>
  );
}
