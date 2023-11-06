import { theme } from '../../theme/theme';

export interface ButtonProps {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  size?: 'large' | 'small';
  variant?: 'filled' | 'outlined' | 'ghost';
  fullWidth?: boolean;
  disabled?: boolean;
}

export function getButtonClassName(
  size: 'large' | 'small',
  variant?: 'filled' | 'outlined' | 'ghost',
  fullWidth?: boolean
): string {
  let padding = '';
  let font = '';
  let full = '';
  let bgColor = '';
  let textColor = '';
  let border = '';

  switch (size) {
    case 'large':
      padding = 'py-3 px-7';
      font = `${theme.text.body1} font-bold`;
      break;
    case 'small':
      padding = 'py-2 px-6';
      font = `${theme.text.body2} font-bold`;
      break;
  }
  switch (variant) {
    case 'filled':
      bgColor = 'bg-primary-50 hover:bg-primary-60';
      textColor = `text-gray-0`;
      border = 'border border-primary-50';
      break;
    case 'outlined':
      bgColor = 'bg-gray-0 hover:bg-primary-10';
      textColor = `text-primary-50`;
      border = 'border border-primary-50';
      break;
    case 'ghost':
      bgColor = 'bg-gray-0 hover:bg-gray-10';
      textColor = `text-gray-90`;
      border = 'border border-gray-20';
      break;
  }
  full = fullWidth ? 'w-full' : '';

  return `${padding} ${bgColor} ${textColor} ${border} ${font} ${full}`;
}
