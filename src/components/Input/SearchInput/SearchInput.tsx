import { useRef } from 'react';
import Icon from '../../../icons';
import { theme } from '../../../theme/theme';
import { InputProps } from '../Input';

interface SearchInputProps extends InputProps {
  size?: 'large' | 'small';
  onSearch: (text?: string) => void;
}

export default function SearchInput({
  placeholder,
  size = 'large',
  onSearch,
  fullWidth,
  value,
  onChange,
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={`relative flex  ${fullWidth ? 'w-full' : 'w-fit'}`}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
        className={`${size === 'large' ? 'py-4' : 'py-3'} ${
          theme.text.body1
        } rounded-full ${
          fullWidth ? 'w-full' : 'w-fit'
        } border border-gray-20 pl-6 pr-11 outline-none placeholder:text-gray-50 text-gray-90 caret-primary-50`}
        placeholder={placeholder}
      />
      <Icon.Search
        className={`absolute right-[15px] top-1/3 cursor-pointer text-gray-70`}
        onClick={() => onSearch(inputRef.current?.value)}
      />
    </div>
  );
}
