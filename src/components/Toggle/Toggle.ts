import { theme } from '../../theme/theme';

export interface ToggleProps {
  id?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
  size?: 'large' | 'small';
  fullWidth?: boolean;
}

export function getButtonToggleClassName(
  size: 'large' | 'small',
  fullWidth?: boolean,
  isActive?: boolean
): string {
  let padding = '';
  let font = '';
  let full = '';
  let color = '';

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
  switch (isActive) {
    case true:
      color = 'bg-primary-10 text-primary-50 border-primary-50';
      break;
    case false:
      color = 'bg-gray-0 text-gray-50 border-greay-20';
      break;
  }
  full = fullWidth ? 'w-full' : '';

  return `${padding} ${color} ${font} ${full}`;
}
