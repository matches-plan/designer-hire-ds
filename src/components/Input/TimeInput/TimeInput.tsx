import { theme } from '../../../theme/theme';
import { InputProps } from '../Input';
import { getBorderColor } from '../../getBorderColor';
import useInput from '../hook/useInput';

interface TimeInputProps extends InputProps {
  timeLeft?: number;
}

export default function TimeInput({
  placeholder,
  fullWidth,
  value,
  onChange,
  timeLeft = 180,
}: TimeInputProps) {
  const { inputRef, isFocused } = useInput();
  return (
    <div className={`relative flex  ${fullWidth ? 'w-full' : 'w-fit'}`}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`py-4 px-3 ${theme.text.body1} rounded-lg ${
          fullWidth ? 'w-full' : 'w-fit'
        } border ${getBorderColor(
          undefined,
          isFocused,
          value
        )} outline-none placeholder:text-gray-50 text-gray-90 caret-primary-50`}
        placeholder={placeholder}
      />
      <div className={`absolute right-[15px] top-4 text-primary-50`}>
        {Math.floor(timeLeft / 60)
          .toString()
          .padStart(2, '0')}
        :{(timeLeft % 60).toString().padStart(2, '0')}
      </div>
    </div>
  );
}
